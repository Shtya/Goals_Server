const AsyncHandler = require("express-async-handler")
const M_goal = require("../model/M_goals")
const M_user = require("../model/M_user")

exports.Get_ = AsyncHandler(async(req, res) => {
  const data = await M_goal.find({user : req.user._id})
  res.status(200).json({data})
})

exports.Post_ = AsyncHandler(async(req, res) => {
  const data = await M_goal.create({text:req.body.text , user:req.user.id})

  res.status(200).json({data })
})





exports.Put_ = AsyncHandler(async (req, res , next) => {
  const user = await M_user.findById(req.user.id)
  const data = await M_goal.findByIdAndUpdate(req.params.id, req.body, { new: true })

  if (!user) return next( new Error("this user no found ... "))
  if(user.id !== data.user.toString()) return next(new Error("user not Authroized ... "))
  res.status(200).json({data})
})

exports.Delete_ = AsyncHandler(async (req, res) => {
  const data = await M_goal.findByIdAndDelete(req.params.id)
  res.status(200).json({data})
})

