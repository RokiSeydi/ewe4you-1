import React, { Component } from "react";
import styles from "./Gallery.module.scss";
import Polaroid from "../../components/Polaroid";
import NavigationBar from "../../components/Navigation/NavigationBar";
import Button from "../../components/Button/";
import firebase from "../../firebase";
import { firestore } from "../../firebase";

class Gallery extends Component {
  state = {
    file: [],
    storageRef: "",
    imagesFromDatabase: [],
    caption: "",
  };

  componentDidMount = () => {
    this.getFileFromDatabase();
  };

  handleFileChange = (e) => {
    this.setState({
      file: e.target.files[0],
      storageRef: e.target.files[0].name,
    });
  };

  uploadImage = () => {
    if (this.state.file) {
      const storage = firebase.storage().ref(this.state.storageRef);
      const upload = storage.put(this.state.file);
      upload.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },

        (err) => {
          console.error(err);
          alert("upload failed");
        },

        () => {
          alert("file uploaded");
          this.getDownloadURL(this.state.storageRef);
        }
      );
    } else {
      alert("No file chosen");
    }
  };

  getDownloadURL = (storageRef) => {
    let storage = firebase.storage().ref(storageRef);
    storage
      .getDownloadURL()
      .then((url) => {
        this.storeDownloadUrl(url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  storeDownloadUrl = (url) => {
    const newImageObject = { url: url, caption: this.state.caption };
    const array = [...this.state.imagesFromDatabase, newImageObject];
    firestore
      .collection("Selfie")
      .doc("testuid")
      .set({
        imgUrls: array,
      })
      .then(() => {
        this.getFileFromDatabase();
        this.setState({
          file: [],
          storageRef: "",
          caption: "",
        });
      })
      .catch((err) => console.log(err));
  };

  getFileFromDatabase = () => {
    const docRef = firestore.collection("Selfie").doc("testuid");

    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          this.setState({ imagesFromDatabase: doc.data().imgUrls });
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  uploadComment = () => {
    console.log(this.state.caption);
    let userCaption = prompt("Please enter your caption");
    console.log(userCaption);
    this.setState({ caption: userCaption }, () =>
      console.log(this.state.caption)
    );
  };

  checkFormCompleted = () => {
    let isCompleted = true;
    if (this.state.caption === "" || this.state.file === []) {
      console.log("You forgot to upload a comment");
      isCompleted = false;
    }

    return isCompleted;
  };

  deleteImage = (i) => {
    const newImages = [...this.state.imagesFromDatabase];
    newImages.splice(i, 1);
    firestore
      .collection("Selfie")
      .doc("testuid")
      .set({
        imgUrls: newImages,
      })
      .then((res) => this.getFileFromDatabase())
      .catch((err) => console.log(err));
  };

  render() {
    this.checkFormCompleted();
    const activeClass = this.state.storageRef !== "" ? styles.active : "";
    return (
      <>
        <div className={styles.galleryContainer}>
          <NavigationBar />
          <h1 className={styles.galleryTitle}>Selfie-Steem</h1>
          <h3 className={styles.galleryTitle}>
            Upload a photo of yourself and add a comment
          </h3>
          <div className={styles.buttonSection}>
            <label className={`${styles.customfileupload} ${activeClass}`}>
              <input type="file" onChange={this.handleFileChange} />
              Select file
            </label>
            <Button
              isActive={this.state.caption != ""}
              link={this.uploadComment}
              className={styles.buttonWrapper}
              text={"Add Comment"}
              caption={this.state.caption}
            />
            <Button
              link={this.uploadImage}
              className={styles.buttonWrapper}
              text={"Upload"}
              disabled={!this.checkFormCompleted()}
            />
          </div>
          <section className={styles.gallery}>
            <div className={styles.polaroidContainer}>
              {this.state.imagesFromDatabase.map((imageObject, index) => (
                <Polaroid
                  src={imageObject.url}
                  text={imageObject.caption}
                  delete={() => this.deleteImage(index)}
                />
              ))}
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Gallery;
