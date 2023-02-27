import Member from '../models/memberModel.js';


const memberController = {

  addMember: async (req, res) => {
    try {
      const { name, role } = req.body

      const newMember = new Member({
        name,
        role,
      });
      newMember
        .save()
        .then(doc => console.log('doc', doc))


    } catch (err) {
      return res.status(500).json('Server error')
    }
  },

  findAndDisplayAll: async (_, res) => {
    try {
      Member.find()
        .then(items => res.json(items))
    } catch (err) {
      return res.status(500).json('Server error')
    }
  },

  deleteMember: async (req, res) => {
    try {
      const deleted = await Member.findByIdAndDelete({ _id: req.params.id })
      if (!deleted) {
        return res.status(404).json('Not found');
      }
      return res.status(201).json('Member deleted');
    } catch (err) {
      return res.status(500).json('Server error')
    }
  },
}

export default memberController;