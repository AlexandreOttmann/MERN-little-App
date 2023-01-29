import Post from '../models/postModel.js';

const postController = {
  getAllPosts: async (req, res) => {
    try {
      const post = await Post.find({});
      if (!post) {
        return res.status(404).json('Post not found');
      }
      return res.status(201).json(post);
    } catch (err) {
      return res.status(500).json('Server error');
    }
	},
	getPostById: async (req, res) => {
		const params = req.params.id;
		try {
			const post = await Post.findOne({ _id: params });
			if (!post) {
				return res.status(404).json('Post not found');
			}
			return res.status(201).json(post);
		} catch (err) {
			return res.status(500).json('Server error');
		}
	}
};


export default postController;
