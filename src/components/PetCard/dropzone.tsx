import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { myPicture } from "hooks";
import styles from "./index.css";
import { useRecoilState } from "recoil";
import {  pictureId} from "atoms";

export function MyPetImg(e) {
    const [Picture, setPicture] = myPicture();
    const [selectedImage, setSelectedImage] = useState([]);
    const picture = useRecoilState(pictureId);
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            setSelectedImage([
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                }),
            ]);
            const reader = new FileReader();
            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = () => {
                const binaryStr = reader.result;
                setPicture(binaryStr);
            };
            reader.readAsDataURL(file);
        });
    }, []);
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        maxFiles: 1,
        multiple: undefined,
        onDragEnter: undefined,
        onDragOver: undefined,
        onDragLeave: undefined,
    });

    return (
        <div className={styles["mascota"]} {...getRootProps()}>
            <div {...getInputProps()} />
            <div className={styles["mascota__imagen"]}>
                {selectedImage[0] ? (
                    <img src={selectedImage[0].preview}></img>
                ) : picture[0] ? (
                    <img src={picture[0]}></img>
                ) : (
                    <div className={styles["mascota__cargar"]}>
                        AGREGAR FOTO
                    </div>
                )}
            </div>
        </div>
    )
}