"use client"
import { useState } from "react";
import PhotoAlbum from "react-photo-album";

import * as React from "react";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Captions from "yet-another-react-lightbox/plugins/captions";
import Counter from "yet-another-react-lightbox/plugins/counter";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import photos from "./imagedata";

export default function Gallery() {
    const [index, setIndex] = useState(-1);
    const [open, setOpen] = React.useState(false);
    const [showToggle, setShowToggle] = React.useState(false);
    const [descriptionMaxLines, setDescriptionMaxLines] = React.useState(3);
    const [descriptionTextAlign, setDescriptionTextAlign] = React.useState<
        "start" | "end" | "center"
    >("center");


    return (
        <>
            <PhotoAlbum photos={photos} layout="columns" targetRowHeight={250} onClick={({ index }) => setIndex(index)}/>
            <Lightbox
                slides={photos}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Captions, Counter, Fullscreen, Slideshow, Zoom]}
                captions={{ showToggle, descriptionTextAlign, descriptionMaxLines }}
            />
        </>
    );
}
