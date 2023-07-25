// const updateSubscription = async (req, res) => {
//   const{_id} = req.user;
//   const {subscription} = req.body
//   console.log(subscription)
//   const updatedUser = await User.findByIdAndUpdate(_id, {subscription})

//   res.status(200).json({message: `Subscription successfully updated to ${subscription}`})
// }