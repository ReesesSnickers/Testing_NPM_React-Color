import React from 'react';
import './App.css'
import { 
  AlphaPicker, 
  BlockPicker, 
  ChromePicker, 
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SketchPicker,
  /* Currently has a styleing issue */
  // SliderPicker,
  SwatchesPicker,
  TwitterPicker} from 'react-color';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      alphaColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      blockColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      chromeColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      circleColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      compactColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      githubColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      hueColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      materialColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      photoshopColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      sketchColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      /* Currently has a styleing issue */
      // sliderColor: {
      //   r: '255',
      //   g: '255',
      //   b: '255',
      //   a: '1',
      // }
      swatchesColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      },
      twitterColor: {
        r: '255',
        g: '255',
        b: '255',
        a: '1',
      }
    };
  }

  handleAlphaChange = (color) => {
    console.log(color)
    let newColor = {
      r: "206",
      g: "148",
      b: "35",
      a: color.rgb.a
    }
    this.setState({
     alphaColor: newColor
    })
  }

  handleBlockChange = (color) => {
    this.setState({
     blockColor: color.rgb
    })
  }

  handleChromeChange = (color) => {
    this.setState({
     chromeColor: color.rgb
    })
  }

  handleCircleChange = (color) => {
    this.setState({
     circleColor: color.rgb
    })
  }

  handleCompactChange = (color) => {
    this.setState({
     compactColor: color.rgb
    })
  }

  handleGithubChange = (color) => {
    this.setState({
     githubColor: color.rgb
    })
  }

  handleHueChange = (color) => {
    this.setState({
     hueColor: color.rgb
    })
  }

  handleMaterialChange = (color) => {
    this.setState({
     materialColor: color.rgb
    })
  }

  handlePhotoshopChange = (color) => {
    this.setState({
     photoshopColor: color.rgb
    })
  }

  handleSketchChange = (color) => {
     this.setState({
      sketchColor: color.rgb
     })
  }

  /* Currently has a styleing issue */
  // handleSliderChange = (color) => {
  //   this.setState({
  //    sliderColor: color.rgb
  //   })
  // }

  handleSwatchesChange = (color) => {
    this.setState({
      swatchesColor: color.rgb
    })
  }

  handleTwitterChange = (color) => {
    this.setState({
      twitterColor: color.rgb
    })
  }

  render() {
    return (
      <div className="container">
        <h1 style={{color: "#007856"}}>Additional information can be located at <a style={{color: "#61dafb"}} href="https://casesandberg.github.io/react-color/#usage-include" target="_blank">https://casesandberg.github.io/react-color/#usage-include</a></h1>
        <div 
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <SketchPicker
            color={ this.state.sketchColor }
            onChange={ this.handleSketchChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.sketchColor.r }, ${ this.state.sketchColor.g }, ${ this.state.sketchColor.b }, ${ this.state.sketchColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }} 
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <AlphaPicker
              color={ this.state.alphaColor }
              onChange={ this.handleAlphaChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.alphaColor.r }, ${ this.state.alphaColor.g }, ${ this.state.alphaColor.b }, ${ this.state.alphaColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <BlockPicker
              color={ this.state.blockColor }
              onChange={ this.handleBlockChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.blockColor.r }, ${ this.state.blockColor.g }, ${ this.state.blockColor.b }, ${ this.state.blockColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <ChromePicker
              color={ this.state.chromeColor }
              onChange={ this.handleChromeChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.chromeColor.r }, ${ this.state.chromeColor.g }, ${ this.state.chromeColor.b }, ${ this.state.chromeColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <CirclePicker
              color={ this.state.circleColor }
              onChange={ this.handleCircleChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.circleColor.r }, ${ this.state.circleColor.g }, ${ this.state.circleColor.b }, ${ this.state.circleColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <CompactPicker
              color={ this.state.compactColor }
              onChange={ this.handleCompactChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.compactColor.r }, ${ this.state.compactColor.g }, ${ this.state.compactColor.b }, ${ this.state.compactColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <GithubPicker
              color={ this.state.githubColor }
              onChange={ this.handleGithubChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.githubColor.r }, ${ this.state.githubColor.g }, ${ this.state.githubColor.b }, ${ this.state.githubColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <HuePicker
              color={ this.state.hueColor }
              onChange={ this.handleHueChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.hueColor.r }, ${ this.state.hueColor.g }, ${ this.state.hueColor.b }, ${ this.state.hueColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <MaterialPicker
              color={ this.state.materialColor }
              onChange={ this.handleMaterialChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.materialColor.r }, ${ this.state.materialColor.g }, ${ this.state.materialColor.b }, ${ this.state.materialColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <PhotoshopPicker
              color={ this.state.photoshopColor }
              onChange={ this.handlePhotoshopChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.photoshopColor.r }, ${ this.state.photoshopColor.g }, ${ this.state.photoshopColor.b }, ${ this.state.photoshopColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        {/* Currently has a styleing issue */}
        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <SliderPicker
              color={ this.state.sliderColor }
              onChange={ this.handleSliderPickerChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.sliderColor.r }, ${ this.state.sliderColor.g }, ${ this.state.sliderColor.b }, ${ this.state.sliderColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div> */}

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <SwatchesPicker
              color={ this.state.swatchesColor }
              onChange={ this.handleSwatchesChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.swatchesColor.r }, ${ this.state.swatchesColor.g }, ${ this.state.swatchesColor.b }, ${ this.state.swatchesColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <TwitterPicker
              color={ this.state.twitterColor }
              onChange={ this.handleTwitterChange }
          />
          <div 
            style={{
              backgroundColor: `rgba(${ this.state.twitterColor.r }, ${ this.state.twitterColor.g }, ${ this.state.twitterColor.b }, ${ this.state.twitterColor.a })`,
              borderRadius: "50%",
              width: "200px",
              height: "200px",
              marginRight: "50px"
            }}
          />
        </div>
      </div>
    );
  }
}
 export default App;