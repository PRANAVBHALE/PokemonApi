const useImgId = (url) => {
  const urlSlice = url.slice(0, -1);

  const imgId = urlSlice.split("/").pop();

  return imgId;
};

export default useImgId;
