import React, { useEffect, useState } from 'react'
import { DropzoneArea } from 'react-mui-dropzone'
import UploadIcon from '../../icons/Shipper/UploadIcon'
import LoadingIcon from '../../icons/Shipper/LoadingIcon'
import CheckIcon from '../../icons/Shipper/CheckIcon'
import DeleteIcon from '../../icons/Shipper/DeleteIcon'
import WarningIcon from '../../icons/Shipper/WarningIcon'
import { Box, LinearProgress } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/system'
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

const IconFile = styled('span')`
  max-width: 20px;
  max-height: 20px;
  margin: auto 0 auto auto;

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-360deg);
    }
  }

  &.iconRotation {
    animation-name: spin;
    animation-duration: 2000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  &.clickable {
    cursor: pointer;
  }

  svg {
    display: block;
    width: 20px;
    height: 20px;
  }
`

const Error = styled('span')`
  font-family: ${(theme) => theme.typography.fontFamily};
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: ${(theme) => theme.palette.red.main};
  margin: 5px auto 0;
  display: flex;

  & svg {
    margin: auto 10px auto 0;
  }
`

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
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            marginTop: '10px'
          }}
        >
          <Box
            as='p'
            sx={{
              width: '100%',
              fontFamily: (theme) => theme.typography.fontFamily,
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '12px',
              color: themeConstants.black.dark,
              overflow: 'hidden',
              whiteSpace: 'nowrap',
              textOverflow: 'ellipsis',
              margin: 'auto 10px auto 0'
            }}
          >
            {file?.[0]?.name}
          </Box>
          {uploadStatus === 'loading' ? (
            <IconFile className='iconRotation'>
              <LoadingIcon />
            </IconFile>
          ) : uploadStatus === 'finished' ? (
            <IconFile>
              <CheckIcon primarycolor='#00CF53' />
            </IconFile>
          ) : uploadStatus === 'error' ? (
            <IconFile>
              <WarningIcon primarycolor='#F20738' />
            </IconFile>
          ) : (
            <IconFile
              className='clickable'
              onClick={() => {
                removeFile()
              }}
            >
              <DeleteIcon />
            </IconFile>
          )}
        </Box>
      )}
      {error && (
        <Error>
          <WarningIcon primarycolor='#F20738' />
          {error}
        </Error>
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
