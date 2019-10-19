import React from "react";
import Jumbotron from "./components/jumbotron";

const MediaBlock = ({title, text, imageUrl}) => {
  return <div className="gallery-item-wrapper">
    <div className="picture">
      <img src={imageUrl} alt="" className="image" />
    </div>
    <div className="text-content">
      <h3 className="text-content-title">{title}</h3>
      <p>{text}</p>
    </div>
  </div>;
};

export default class GalleryPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;

    let image = getAsset(entry.getIn(["data", "image"]));

    // Bit of a nasty hack to make relative paths work as expected as a background image here
    if (image && !image.fileObj) {
      image = window.parent.location.protocol + "//" + window.parent.location.host + image;
    }

    const entryPictures = entry.getIn(["data", "pictures"]);
    const pictures = entryPictures ? entryPictures.toJS() : [];

    return <div>
      <div className="center mw6 pv3">
        <h1 class="center">{entry.getIn(["data", "title"])}</h1>
        <hr/>
        <div class="center">{entry.getIn(["data", "text"])}</div>
      </div>
      <div className="bg-off-white pv4">
        <div className="mw7 center ph3 pt4">
          {pictures.map(({text, title, imageUrl}, i) =>
            <MediaBlock key={i} text={text} title={title} imageUrl={imageUrl}/>
          )}
        </div>
      </div>
    </div>;
  }
}
