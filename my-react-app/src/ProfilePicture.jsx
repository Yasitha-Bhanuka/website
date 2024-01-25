function ProfilePicture() {
  const imageUrl = "../src/assets/image.jpg";

  const handleClick = e => (e.target.style.display = "none");

  return (
    <>
      <img
        onClick={e => {
          handleClick(e);
        }}
        src={imageUrl}
      ></img>
      <h2>Hello, World</h2>
    </>
  );
}

export default ProfilePicture;
