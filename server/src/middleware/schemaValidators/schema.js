const product = {
  name: "Điện thoại Samsung Galaxy S20 Ultra 512GB/32GB", // required
  category: [
    "Điện Thoại & Phụ Kiện",
    "Điện Thoại",
    "Smartphone - Điện Thoại Thông Minh",
  ], // required
  discountCode: ["50%", "25k"],
  newestPrice: 30000000, // required
  oldPrice: 35000000,
  image: [
    "10084512354125789153.png",
    "10084512354125789154.png",
    "10084512354125789155.png",
    "10084512354125789156.png",
  ], // required
  color: ["red", "green", "blue"],
  rating: 5, // required
  rated: 1800, // required
  sold: 4500, // required
  inventory: 337, // required
  sendFrom: "Đồng Nai", // required
  shippingTime: [3, 5], // required
  brief: ["Call", "Fastest 5G", "3 Camera"], // required
  video: "https://youtube.com/",
  returnPolicy: `
  `,
  description: `
  `,
  supplier: ["ref"],
  comments: ["ref"],
  relateProduct: ["ref"],
  productFromShop: ["ref"],
};

const supplier = {
  name: "Điện Thoại Chính Hãng Thế Giới Di Dộng",
  class: "Vàng",
  productsCount: 115,
  follower: 112000,
  following: 0,
  rating: 5,
  responseRate: 97,
  shopCoupon: [
    [50, 0, 5000],
    [30, 0, 20000],
  ],
  products: ["ref"],
  productsCategory: [
    "Điện thoại Samsung",
    "Điện thoại Iphone",
    "Điện thoại Google Pixel",
  ],
  description: `
  `,
  avatar: "2133546879.png",
  lastActivity: new Date(),
  createAt: new Date(),
};

const comment = {
  text: "Sản phẩm tuyệt vời",
  images: [],
  author: "dung.nguyen.1",
  post: ["ref"],
  createAt: new Date(),
};

const commentLike = {
  comment: ["ref -> comment"],
  usersLike: [["ref -> user"]],
};

const commentReply = {
  text: "Tôi đồng ý với bạn",
  author: "khanh.le.11",
  commentAt: ["ref -> comment"],
  createAt: new Date(),
};

const commentReplyLike = {
  comment: ["ref -> commentReply"],
  usersLike: [["ref -> user"]],
};
