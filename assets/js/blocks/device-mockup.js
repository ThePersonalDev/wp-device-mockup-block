import {registerBlockType} from '@wordpress/blocks'
import {InspectorControls} from '@wordpress/editor'
import {createElement} from '@wordpress/element'
import {PanelBody, PanelRow, SelectControl} from '@wordpress/components'

const icon = createElement('svg', {viewBox: '0 0 448 512'},
	createElement('path', {d: 'M400 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM224 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm176-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h328c6.6 0 12 5.4 12 12v312z'})
)

const devices = [
  {id: 'iPhone5', label: 'iPhone 5'}
]

registerBlockType('tpd/device-mockups', {
  title: 'Device mockup',
  category: 'common',
  icon,

  attributes: {
    device: {
      type: 'string'
    },
    orientation: {
      type: 'string'
    },
    color: {
      type: 'string'
    }
  },
  
  edit: ({attributes}) => {
    const {device} = attributes
    
    return (
      <>
        <InspectorControls>
          <PanelBody title="Device Options">
            <PanelRow>
              <SelectControl label="Device" value={device} options={devices} />
            </PanelRow>
          </PanelBody>
        </InspectorControls>

        <div className="device-wrapper">
          <div className="device" data-device="iPhone5" data-orientation="portrait" data-color="black">
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