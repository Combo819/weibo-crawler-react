const getVideoUrl = (url: string): string => {
    const urlNoQuery = url.split("?")[0];
    const fileName = urlNoQuery.split("/").pop();
    return `http://localhost/videos/${fileName}`;
  };

  export {getVideoUrl}