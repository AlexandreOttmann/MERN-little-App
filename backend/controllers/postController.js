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
	addPost: async (req, res) => {
		const dbPosts = req.body;
		try {
			const post = await Post.create(dbPosts);
			if (!post) {
				return res.status(404).json('Post not dound');
			}
			return res.status(201).json(post);
		} catch (err) {
			return res.status(500).send('Server error', err);
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
	},
	updatePostById: async (req, res) => {
		try {
			const post = await Post.findByIdAndUpdate(req.params.id, req.body);
			if (!post) {
				return res.status(404).json('Not found');
			}
			return res.status(201).json('Post updated');
		} catch (err) {
			return res.status(500).json('Server error');
		}
	},
	deletePostById: async (req, res) => {
		try {
			const post = await Post.findByIdAndRemove(req.params.id);
			if (!post) {
				return res.status(404).json('Not found');
			}
			return res.status(201).json('Post deleted');
		} catch (err) {
			return res.status(500).json('Server error');
		}
	},
};


export default postController;
