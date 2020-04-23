class UploadImg {
  async sendAvatar(file) {
    try {
      const URL_API = process.env.URL_API || 'http://localhost:5000' 
      if (!file) throw new Error('Files are missing');
      if (Object.keys(file).length > 1)
        throw new Error('Only accept One file for avatar');
      const path = `../public/profiles/${file.avatar.name}`;
      file.avatar.mv(path);
      const cleanPath = path.replace('../', '');      
      return `${URL_API}/${cleanPath}`;
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default UploadImg;
