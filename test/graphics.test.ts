import * as graphics from '../src/graphics'
import { combineRGB } from '../src/util'
import data from './data.json'


describe('test generating a bar', () => {
  it('should return a bar image', () => {
    const bar: Uint8Array = Buffer.from(data.bar)
    const options: graphics.OptionsBar = {
      width: 72,
      height: 72,
      barLength: 62,
      barWidth: 6,
      colors: [
        { size: 100, color: combineRGB(0, 255, 0), background: combineRGB(0, 255, 0), backgroundOpacity: 64 }
      ],
      opacity: 255,
      offsetX: 33,
      offsetY: 5,
      value: 75,
      type: 'vertical'
    }

    expect(graphics.bar(options)).toEqual(bar)
  })

  it('should return a border image', () => {
    const border: Uint8Array = Buffer.from(data.border)
    const options: graphics.OptionsBorder = {
      width: 72,
      height: 72,
      color: combineRGB(255, 0, 0),
      size: 5,
      opacity: 255,
      type: 'border'
    }
    
    expect(graphics.border(options)).toEqual(border)
  })

  it('should return a corner image', () => {
    const corner: Uint8Array = Buffer.from(data.corner)
    const options: graphics.OptionsCorner = {
      width: 72,
      height: 72,
      color: combineRGB(255, 0, 0),
      opacity: 255,
      location: 'topRight',
      size: 8
    }

    expect(graphics.corner(options)).toEqual(corner)
  })

  it('should return a icon image', () => {
    const icon: Uint8Array = Buffer.from(data.icon)
    const options: graphics.OptionsIcon = {
      width: 72,
      height: 72,
      type: 'mic1',
      offsetX: 14,
      offsetY: 6
    }

    expect(graphics.icon(options)).toEqual(icon)
  })

  it('should return a rectangle image', () => {
    const rect: Uint8Array = Buffer.from(data.rect)
    const options: graphics.OptionsRect = {
      width: 72,
      height: 72,
      color: combineRGB(0, 0, 255),
      rectWidth: 36,
      rectHeight: 36,
      strokeWidth: 4,
      fillColor: combineRGB(0, 255, 0),
      fillOpacity: 128,
      offsetX: 18,
      offsetY: 18,
      opacity: 255
    }

    expect(graphics.rect(options)).toEqual(rect)
  })
})

describe('test stacking images', () => {
  it('should return a combined stack of images as a buffer', () => {
    const border: Uint8Array = Buffer.from(data.border)
    const rect: Uint8Array = Buffer.from(data.rect)
    const stack: Uint8Array = Buffer.from(data.stack)

    expect(graphics.stackImage([border, rect])).toEqual(stack)
  })
})