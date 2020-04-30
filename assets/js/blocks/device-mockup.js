import {registerBlockType} from '@wordpress/blocks'
import {MediaUpload, InspectorControls} from '@wordpress/editor'
import {createElement} from '@wordpress/element'
import {PanelBody, PanelRow, SelectControl, Button} from '@wordpress/components'

const icon = createElement('svg', {viewBox: '0 0 448 512'},
	createElement('path', {d: 'M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z'})
)

const deviceOpts = [
  {value: 'iPhone5', label: 'iPhone 5'},
  {value: 'galaxyS3', label: 'Galaxy S3'},
  {value: 'Chromebook', label: 'Chromebook'},
  {value: 'galaxyS3', label: 'Galaxy S3'},
  {value: 'galaxyS5', label: 'Galaxy S5'},
  {value: 'galaxyTab4', label: 'Galaxy Tab 4'},
  {value: 'HtcOneM8', label: 'HTC One M8'},
  {value: 'HuawieP8', label: 'Huawie P8'},
  {value: 'iMac', label: 'iMac'},
  {value: 'iPad', label: 'iPad'},
  {value: 'iPadAir2', label: 'iPad Air 2'},
  {value: 'iPadPro', label: 'iPad Pro'},
  {value: 'iPhone6', label: 'iPhone 6'},
  {value: 'iPhone6Plus', label: 'iPhone 6 Plus'},
  {value: 'iPhoneSE', label: 'iPhone SE'},
  {value: 'iPhone5', label: 'iPhone 5'},
  {value: 'iPhone6Hand', label: 'iPhone 6 with Hand'},
  {value: 'iPhone7Hand', label: 'iPhone 7 with Hand'},
  {value: 'iPhone7Hand_2', label: 'iPhone 7 with Hand 2'},
  {value: 'iPhone7', label: 'iPhone 7'},
  {value: 'iPhoneX', label: 'iPhone X'},
  {value: 'Lumia930', label: 'Lumia 930'},
  {value: 'Macbook', label: 'Macbook'},
  {value: 'Macbook2015', label: 'Macbook 2015'},
  {value: 'MacbookPro2015', label: 'Macbook Pro 2015'},
  {value: 'Pixel', label: 'Pixel'},
  {value: 'SamsungTV', label: 'Samsung TV'},
  {value: 'SurfacePro3', label: 'Surface Pro 3'},
  {value: 'SurfaceStudio', label: 'Surface Studio'}
]
const deviceConfig = {
  Chromebook: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}]},
  galaxyS3: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}]},
  galaxyS5: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}]},
  galaxyTab4: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}]},
  HtcOneM8: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}]},
  HuawiP8: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'gold', label: 'Gold'}]},
  iMac: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}]},
  iPad: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}]},
  iPadAir2: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}]},
  iPadPro: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}]},
  iPhone6: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}]},
  iPhone6Plus: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}]},
  iPhoneSE: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}, {value: 'pink', label: 'Pink'}]},
  iPhone5: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}]},
  iPhone6Hand: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}]},
  iPhone7Hand: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}]},
  iPhone7Hand_2: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}]},
  iPhone7: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}, {value: 'pink', label: 'Pink'}, {value: 'red', label: 'Red'}]},
  iPhoneX: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}]},
  Lumia930: {orientation: [{value: 'portrait', label: 'Portrait'}, {value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}]},
  Macbook: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}]},
  Macbook2015: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}, {value: 'gold', label: 'Gold'}]},
  MacbookPro2015: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}]},
  Pixel: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}, {value: 'white', label: 'White'}]},
  SamsungTV: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}]},
  SurfacePro3: {orientation: [{value: 'landscape', label: 'Landscape'}], colors: [{value: 'black', label: 'Black'}]},
  SurfaceStudio: {orientation: [{value: 'portrait', label: 'Portrait'}], colors: [{value: 'black', label: 'Black'}]}
}

registerBlockType('tpd/device-mockups', {
  title: 'Device mockup',
  category: 'common',
  icon,

  attributes: {
    device: {
      type: 'string',
      default: 'iPhone5'
    },
    orientation: {
      type: 'string',
      default: 'portrait'
    },
    color: {
      type: 'string',
      default: 'black'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string'
    }
  },
  
  edit: ({attributes, setAttributes}) => {
    const {device, orientation, color, mediaID, mediaURL} = attributes
    
    const onDeviceChange = function (newDevice) {
      setAttributes({device: newDevice})
    }
    const onOrientationChange = function (newOrientation) {
      setAttributes({orientation: newOrientation})
    }
    const onColorChange = function (newColor) {
      setAttributes({color: newColor})
    }
    const onMediaSelect = function (media) {
      setAttributes({
        mediaID: media.id,
        mediaURL: media.url
      })
    }

    return (
      <>
        <InspectorControls>
          <PanelBody title="Device Options">
            <PanelRow>
              <SelectControl label="Device" value={device} options={deviceOpts} onChange={onDeviceChange} />
            </PanelRow>
            <PanelRow>
              <SelectControl label="Orientation" value={orientation} options={deviceConfig[device].orientation} onChange={onOrientationChange} />
            </PanelRow>
            <PanelRow>
              <SelectControl label="Color" value={color} options={deviceConfig[device].colors} onChange={onColorChange} />
            </PanelRow>
            <PanelRow>
              <MediaUpload
                onSelect={onMediaSelect}
                allowedTypes="image"
                value={mediaID}
                render={({open}) => (
                  <Button className={mediaID ? 'image-button' : 'button button-large'} onClick={open}>
                    {!mediaID ? 'Upload Image' : <img src={mediaURL} />}
                  </Button>
                )}
              />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        <div className="device-wrapper">
          <div className="device" data-device={device} data-orientation={orientation} data-color={color}>
            <div className="screen" style={{background: mediaURL ? `url(${mediaURL})` : ''}}>
            </div>
            <div className="button">
            </div>
          </div>
        </div>
      </>
    )
  }
})