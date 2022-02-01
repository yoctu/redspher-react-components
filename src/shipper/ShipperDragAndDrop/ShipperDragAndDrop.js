import React, { useEffect, useState } from 'react'
import { DropzoneArea } from 'react-mui-dropzone'
import UploadIcon from '../../icons/Shipper/UploadIcon'
import styles from './ShipperDragAndDrop.module.scss'
import LoadingIcon from '../../icons/Shipper/LoadingIcon'
import CheckIcon from '../../icons/Shipper/CheckIcon'
import DeleteIcon from '../../icons/Shipper/DeleteIcon'
import WarningIcon from '../../icons/Shipper/WarningIcon'
import { LinearProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'
import themeConstants from '../theme/themeConstants'

const useStyles = makeStyles({
  root: {
    width: '100%',
    padding: '10px',
    minHeight: 'fit-content',
    backgroundColor: 'transparent',
    maxWidth: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: `1px dashed ${themeConstants.grey.main}`
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    margin: 'auto'
  },
  text: {
    margin: 'auto auto auto 10px',
    fontSize: '12px',
    color: themeConstants.grey.dark
  },
  icon: {
    margin: 'auto'
  }
})

/**
 * @param uploadStatus
 * @param acceptedFiles
 * @param dropzoneText
 * @param onChangeMethod
 * @param errorMessage
 * @param maxFileSize
 * @returns {JSX.Element}
 * @constructor
 */
function DragAndDrop({
  uploadStatus = '',
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
  const classes = useStyles()

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
      setTimer(null)
      setProgress(100)
    } else {
      clearInterval(timer)
      setTimer(null)
      setProgress(0)
    }
  }, [uploadStatus])

  const handleChange = (file) => {
    setFile(file)
    setError(null)
  }
  const reject = () => {
    setFile(null)
    setError(errorMessage)
  }

  const removeFile = () => {
    setFile(null)
    uploadStatus = null
  }

  return (
    <div>
      <DropzoneArea
        classes={{
          root: classes.root,
          textContainer: classes.textContainer,
          text: classes.text,
          icon: classes.icon
        }}
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
          onChangeMethod && onChangeMethod(file)
          handleChange(file)
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
              <CheckIcon primarycolor='#00CF53' />
            </span>
          ) : uploadStatus === 'error' ? (
            <span className={`${styles.iconFile}`}>
              <WarningIcon primarycolor='#F20738' />
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
          <WarningIcon primarycolor='#F20738' />
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
