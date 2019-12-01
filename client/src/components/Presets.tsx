import React from 'react';
import Animate from '../utils/Animate';

import '../styles/presets.scss'

import { downloadUrl } from './Main';

// ----- ----- ----- -----
// PRESET ---- ----- -----
// ----- ----- ----- -----

export interface PresetProps {
  key?: number;
  name: string;
  description: Array<string>;
  notes: Array<string>;
  presetRoute: string;
  dngRoute: string;
  image_before: string;
  image_after: string;

}

const Preset: React.FC<PresetProps> = (Props) => {
  return (
    <div className={'preset col col-3 subgrid'}>

      <Animate className={'col col-3'} effect={'fade-up-in'}>
        <h1>{Props.name}.xmp</h1>
        <p>A Lightroom Preset by Joe Boylson</p>
      </Animate>

      <Animate className={'col col-3'} effect={'fade-up-in'}>
        <a
          href={`${downloadUrl}${Props.presetRoute}`}
          className={'link-like-button blue'}
        >Download {Props.name}.xmp</a>

        <a
          href={`${downloadUrl}${Props.dngRoute}`}
          className={'link-like-button blue'}
        >Download {Props.name}.dng</a>
      </Animate>

      <Animate className={'col col-1'} effect={'fade-up-in'}>
        <h3>Description:</h3>
        { Props.description.map((line:string, index:number) => {
          return <p key={index}>{line}</p>
        })}
      </Animate>

      <Animate className={'col col-2 nomarg-desktop'} effect={'fade-up-in'}>
        <h3>PHOTOGRAPHER NOTES:</h3>
        <ul>
          { Props.notes.map((line:string, index:number) => {
            return <li key={index}>{line}</li>
          })}
        </ul>
      </Animate>

      <Animate className={'preview col col-1 col-2-tablet'} effect={'fade-up-in'}>
        <h3>Before:</h3>
        <img src={Props.image_before} alt=""/>
        <p>* Photo has been corrected for white balance and exposure.</p>
      </Animate>

      <Animate className={'preview col col-1 nomarg-desktop col-2-tablet'} effect={'fade-up-in'}>
        <h3>After:</h3>
        <img src={Props.image_after} alt=""/>
      </Animate>

    </div>
  )
}



// ----- ----- ----- -----
// PRESET LIST ----- -----
// ----- ----- ----- -----

const presets = [
  { 
    name: 'Pendleton', 
    presetRoute: '/lrpresets/Pendleton.xmp',
    dngRoute: '/lrpresets/Pendleton.dng',
    image_before: '/images/preset_Pendleton/before.jpg',
    image_after: '/images/preset_Pendleton/after.jpg',
    description: [
      `This preset was created to accentuate the warm colors of Over the Rhine, Cincinnati during Autumn.`,
      `Yellows, Oranges, and Reds are pushed toward a soft orange, while Blues, Greens, and Purples are muted.`,
      `The Contrast is also reduced, which adds a softness over the entire photo.`
    ],
    notes: [
      `The Saturation in the Blues may need to be increased`,
      `Yellows and Oranges may need to be tweaked for skin tones (portraits)`,
      `The contrast may need to be increased if there are no hard shadows`
    ]
  }
]

const PresetList: React.FC = (Props) => {

  return (    
    <div id={'preset-list'} className={'grid'}>

      <Animate className={'col col-3 header underlined'} effect={'fade-up-in'} animateOnLoad>
        <h1>Presets</h1>

        <p className={'header-text'}>
          Editing a photo can take it from bad or "just ok" to great. Here is a collection of presets
          I have developed that I will take your edits to the next level or inspire you to 
          make your own presets.
        </p>

        <p className={'header-text'}>
          All presets are free to use for commercial or private purposes.
        </p>

        <p className={'header-text'}>
          Get out there and shoot!
        </p>

        <p className={'header-text'}>
          P.S. Always shoot in RAW.
        </p>

        <h3>Installation Instructions:</h3>

        <a
          href={'https://www.lookslikefilm.com/2019/02/03/how-to-install-lightroom-presets/'}
          target={'__blank'}
          className={'link-like-button blue'}
        >Lightroom Classic (desktop)</a>
        <a
          href={'https://seandalt.com/how-to-install-lightroom-mobile-dng-presets-creative-cloud/'}
          target={'__blank'}
          className={'link-like-button blue'}
        >Lightroom CC (with subscription - method 1)</a>
        <a
          href={'https://seandalt.com/how-to-install-lightroom-mobile-dng-presets-creative-cloud/'}
          target={'__blank'}
          className={'link-like-button blue'}
        >Lightroom CC (without subscription - method 2)</a>

      </Animate>


      { presets.map((preset:any, index: number) => {
        return (
          <Preset 
            key={index}
            {...preset}
          />
        )
      })}

    </div>
  )

}

export default PresetList;
export { Preset }