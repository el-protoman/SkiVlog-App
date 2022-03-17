import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';

export default class PlayerNoSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videoId: this.props.match.params.id,
      videoData: {}
    };
  }

//   async componentDidMount() {
//     try {
//       const res = await fetch(`http://localhost:4000/video/${this.state.videoId}/data`);
//       const data = await res.json();
//       this.setState({ videoData: data });
//     } catch (error) {
//       console.log(error);
//     }
//   }

  render() {
    return (
      <div className="App-header">
        <Header />
        <video controls muted autoPlay crossOrigin="anonymous">
          <source src={`https://media-cdn-us-west-2.gopro.com/c35f7539-8bb7-40eb-933c-0b4a809d4730/2091336148184991071/concat/default/1.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIA3OOFXGVAOGEAL3GB%2F20220316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220316T015621Z&X-Amz-Expires=3600&X-Amz-Security-Token=FwoGZXIvYXdzEBsaDN%2BstnBL68TgsqQ7lyKSBB8lAZ8lv7V0Y6b5pOOJd%2BNLCHylR%2BPE1P38ohhNQFpVTxzvWZPaPc8Ecbo7z7Q%2F4PAw9MY07lhC2UG0vMG3FKs46HVMdqVuOzvhlDu3Eg08evmHeRCUPJs9pZgD6v99jsMuk%2FxdmkIDBBuI8DcHA935BJNo58Z7EsKA16tp%2B0BvuGNsiEIxrSD5Qm5mdwa%2BseC2qYnGEAf09GKPTBckJsaSiKc8LU55BSaa8nZjOKsyShTMM4mQgvZl7nbhyEvkSx8GxymXdADmz5bjz3fj8Om2R4xVSY97hX85Iz95Bx8SJuy3hx1%2FNXAdEFUTtOxwQBpiujoqS3KpGRWXyjQDRDyh5dugC5%2Bm%2B%2F1DERqwOP3pDfZCBttM9o6fliQ2ov%2F6r8irBE7arhfGoHteiQMzhm7Z8vWVMiW%2FSVJANekccyw7bdagxiLFGs6obvbfz9cwxm00KNU40cteMxaVNA5WssLrCvSR6pgiNcRtT3fdONeA1gn7L%2F0lIE8MAbPSl8d4%2BwZ3MdUZvsENSFCuScj5%2FVfnIgd50oZI3wbkRd9ZF0NvJw7m5RpqB%2Bk4w0XvXS%2FDSjwoOsuWYVBB2%2Fx3P%2BDe8xf%2B3uPC6rORYQXQ2hhZk1RXP1iFEzd4yC1foZG8FH5sH1aVAk2mp09HQGBeIVxnMkaubtnRwzbHn4CQ4jTVH5bUAZDibKAKE0rMFpotta3VdKgAKJf8xJEGMipFZ3P6%2BwzlvEw2c7cnV9VByAThJwRK%2FUkxZTMg8%2F6mbJkWOqIAfawrZeA%3D&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%3DGH010030.MP4%3B&X-Amz-Signature=de961425c9cef91fe1a55f9d21bb9cd3cb730e769611b0d800bc963e153f3bad`} type="video/mp4"></source>
          {/* <track label="English" kind="captions" srcLang="en" src={`http://localhost:4000/video/${this.state.videoId}/caption`} default></track> */}
        </video>
        <h1 style={{display:'flex',justifyContent:'center',alignItems:'center'}}>{ this.state.videoData.name }</h1>
        <Footer />
      </div>
    )
  }
}
