import {registerBlockType} from '@wordpress/blocks'
import {InspectorControls} from '@wordpress/editor'
import {createElement} from '@wordpress/element'
import {PanelBody, PanelRow, SelectControl} from '@wordpress/components'

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
  Chromebook: {orientation: ['portrait'], colors: ['black']},
  galaxyS3: {orientation: ['portrait', 'landscape'], colors: ['black', 'white']},
  galaxyS5: {orientation: ['portrait', 'landscape'], colors: ['black', 'white', 'gold']},
  galaxyTab4: {orientation: ['portrait'], colors: ['black', 'white']},
  HtcOneM8: {orientation: ['portrait', 'landscape'], colors: ['black']},
  HuawiP8: {orientation: ['portrait', 'landscape'], colors: ['gold']},
  iMac: {orientation: ['portrait'], colors: ['black']},
  iPad: {orientation: ['portrait', 'landscape'], colors: ['black', 'white']},
  iPadAir2: {orientation: ['portrait', 'landscape'], colors: ['black', 'white', 'gold']},
  iPadPro: {orientation: ['portrait', 'landscape'], colors: ['black', 'white', 'gold']},
  iPhone6: {orientation: ['portrait', 'landscape'], colors: ['black', 'white', 'gold']},
  iPhone6Plus: {orientation: ['portrait', 'landscape'], colors: ['black', 'white', 'gold']},
  iPhoneSE: {orientation: ['portrait', 'landscape'], colors: ['black', 'white', 'gold', 'pink']},
  iPhone5: {orientation: ['portrait', 'landscape'], colors: ['black', 'white']},
  iPhone6Hand: {orientation: ['portrait'], colors: ['black', 'white']},
  iPhone7Hand: {orientation: ['portrait'], colors: ['black']},
  iPhone7Hand_2: {orientation: ['portrait'], colors: ['black']},
  iPhone7: {orientation: ['portrait', 'landscape'], colors: ['black', 'white', 'gold', 'pink', 'red']},
  iPhoneX: {orientation: ['portrait', 'landscape'], colors: ['black']},
  Lumia930: {orientation: ['portrait', 'landscape'], colors: ['black', 'white']},
  Macbook: {orientation: ['portrait'], colors: ['black', 'white', 'gold']},
  Macbook2015: {orientation: ['portrait'], colors: ['black', 'white', 'gold']},
  MacbookPro2015: {orientation: ['portrait'], colors: ['black']},
  Pixel: {orientation: ['portrait'], colors: ['black', 'white']},
  SamsungTV: {orientation: ['portrait'], colors: ['black']},
  SurfacePro3: {orientation: ['landscape'], colors: ['black']},
  SurfaceStudio: {orientation: ['portrait'], colors: ['black']}
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
      type: 'string'
    },
    color: {
      type: 'string'
    }
  },
  
  edit: ({attributes, setAttributes}) => {
    const {device} = attributes
    
    const onDeviceChange = function (newDevice) {
      console.log('newDevice', newDevice)
      setAttributes({device: newDevice})
    }
    
    return (
      <>
        <InspectorControls>
          <PanelBody title="Device Options">
            <PanelRow>
              <SelectControl label="Device" value={device} options={deviceOpts} onChange={onDeviceChange} />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        <h1>{device}</h1>

        <div className="device-wrapper">
          <div className="device" data-device={device} data-orientation="portrait" data-color="black">
            <div className="screen">
            </div>
            <div className="button">
            </div>
          </div>
        </div>
      </>
    )
  }
})