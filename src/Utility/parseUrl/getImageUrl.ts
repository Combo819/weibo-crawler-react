const getImageUrl = (url: string): string => {
    const urlNoQuery = url.split("?")[0];
    const fileName = urlNoQuery.split("/").pop();
    return `http://localhost/images/${fileName}`;
  };

  export {getImageUrl};