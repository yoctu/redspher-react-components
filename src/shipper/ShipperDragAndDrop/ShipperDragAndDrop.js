import React, { useEffect, useState } from 'react'
import { DropzoneArea } from 'material-ui-dropzone'
import UploadIcon from '../../icons/Shipper/UploadIcon'
import styles from './ShipperDragAndDrop.module.scss'
import LoadingIcon from '../../icons/Shipper/LoadingIcon'
import CheckIcon from '../../icons/Shipper/CheckIcon'
import DeleteIcon from '../../icons/Shipper/DeleteIcon'
import WarningIcon from '../../icons/Shipper/WarningIcon'
import { LinearProgress } from '@material-ui/core'

function DragAndDrop({
  uploadStatus,
  acceptedFiles = [],
  dropzoneText = 'Drag and drop a file here or click',
  onChangeMethod = null,
  errorMessage = 'Error: The file can be in the wrong format or too heavy',
  maxFileSize = 5000000
}) {
  const [file, setFile] = useState(null)
  const [progress, setProgress] = useState(0)
  const [timer, setTimer] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (uploadStatus === 'loading') {
      if (!timer) {
        const timerId = setInterval(() => {
          setProgress((prevProgress) =>
            prevProgress <= 76 ? prevProgress + 19 : 99
          )
        }, 500)
        setTimer(timerId)
      }
    } else if (uploadStatus === 'finished') {
      clearInterval(timer)
      setProgress(100)
    } else {
      clearInterval(timer)
    }
  }, [uploadStatus])

  const handleChange = (file) => {
    setFile(file)
    uploadStatus = null
  }
  const reject = () => {
    setError(errorMessage)
  }

  const removeFile = () => {
    setFile(null)
    uploadStatus = null
  }

  return (
    <div>
      <DropzoneArea
        filesLimit={1}
        Icon={UploadIcon}
        dropzoneText={dropzoneText}
        showAlerts={false}
        showPreviewsInDropzone={false}
        clearOnUnmount={false}
        acceptedFiles={acceptedFiles}
        maxFileSize={maxFileSize}
        onDropRejected={() => {
          reject()
        }}
        onChange={(file) => {
          onChangeMethod ? onChangeMethod(file) : handleChange(file)
        }}
      />
      {file?.[0]?.name && (
        <div className={`${styles.filenameContainer}`}>
          <p className={`${styles.typoFileName}`}>{file?.[0]?.name}</p>
          {uploadStatus === 'loading' ? (
            <span className={`${styles.iconFile} ${styles.iconRotation}`}>
              <LoadingIcon />
            </span>
          ) : uploadStatus === 'finished' ? (
            <span className={`${styles.iconFile}`}>
              <CheckIcon primaryColor='#00CF53' />
            </span>
          ) : uploadStatus === 'error' ? (
            <span className={`${styles.iconFile}`}>
              <WarningIcon primaryColor='#F20738' />
            </span>
          ) : (
            <span
              className={`${styles.iconFile} ${styles.clickable}`}
              onClick={() => {
                removeFile()
              }}
            >
              <DeleteIcon />
            </span>
          )}
        </div>
      )}
      {error && (
        <span className={`${styles.errorMessage}`}>
          <WarningIcon primaryColor='#F20738' />
          {error}
        </span>
      )}
      {file?.[0]?.name && uploadStatus && (
        <LinearProgress
          className={`${uploadStatus}`}
          variant='determinate'
          value={progress}
        />
      )}
    </div>
  )
}

export default DragAndDrop
