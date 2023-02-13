import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { myPicture } from "hooks";
import styles from "./index.css";

export function MyPetImg(e) {
    const [Picture, setPicture] = myPicture();
    const [selectedImage, setSelectedImage] = useState([]);

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
    const { getRootProps, getInputProps } = useDropzone({
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
            <div 
                className={styles["mascota__imagen"]}
                style={{
                    backgroundImage: `url(${
                        selectedImage[0] ? selectedImage[0].preview : e.img
                    })`,
                }} >
                {!selectedImage[0] &&  ! e.img? (
                    <div className={styles["mascota__cargar"]} > 
                        AGREGAR FOTO
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    );
}
