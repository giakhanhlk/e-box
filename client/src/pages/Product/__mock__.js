import React from "react";
import Comment from "./components/Comment";

const tab = [
  {
    key: 1,
    name: "Mô tả",
    description: `<p>&nbsp;<span style="background-color: white; color: rgba(0, 0, 0, 0.8); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, 文泉驛正黑, &quot;WenQuanYi Zen Hei&quot;, &quot;Hiragino Sans GB&quot;, &quot;儷黑 Pro&quot;, &quot;LiHei Pro&quot;, &quot;Heiti TC&quot;, 微軟正黑體, &quot;Microsoft JhengHei UI&quot;, &quot;Microsoft JhengHei&quot;, sans-serif; font-size: 14px; white-space: pre-wrap;">1. Một số lưu ý:  </span></p><span style="background-color: white; color: rgba(0, 0, 0, 0.8); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, 文泉驛正黑, &quot;WenQuanYi Zen Hei&quot;, &quot;Hiragino Sans GB&quot;, &quot;儷黑 Pro&quot;, &quot;LiHei Pro&quot;, &quot;Heiti TC&quot;, 微軟正黑體, &quot;Microsoft JhengHei UI&quot;, &quot;Microsoft JhengHei&quot;, sans-serif; font-size: 14px; white-space: pre-wrap;">- Pin sạc NiMh có điện áp 1,2v, dùng thay cho pin 1,5v. Tuy nhiên, có thể không phù hợp với máy hút sữa Philips Avent, chuột Fuhlen, máy đo huyết áp và một số thiết bị điện tử đòi đúng 1,5v. 
- Không được sạc pin loại dùng một lần mua ở tiệm, cố tình sạc thì sẽ xảy ra cháy nổ, không được bảo hành.
- Quý khách chưa có sạc thì chọn pin + sạc, quý khách đã có sạc hoặc mua thêm pin thì chọn pin lẻ để tránh nhầm lẫn

2. Thông số bộ sạc Beston C807B: 
- Điện áp vào: 100V-240V, 50/60Hz, 0.5W Max
- Tốc độ sạc: pin AA là 200mA , cho pin AAA là 100mA, có thể sạc cùng lúc pin AA và AAA
- Là sạc không tự ngắt, không báo đầy, đèn vẫn đỏ trong suốt quá trình sạc, không chuyển sang màu xanh. 
- Dòng sạc thấp giúp chất lượng sạc tốt, không bị pin ảo, tuổi thọ của pin được bền hơn, độ tin cậy cao. Nếu để quá thời gian không làm ảnh hưởng tới chất lượng của pin, nhưng không nên để quá vài ngày.

3. Thông số pin sạc AA và AAA của hãng Beston:
- Pin AA 1200mAh (pin tiểu) có thời gian sạc tối thiểu 6,5 tiếng thì đầy với bộ sạc C807B
- Pin AA 2000mAh (pin tiểu) có thời gian sạc tối thiểu 10 tiếng thì đầy với bộ sạc C807B
- Pin AA 3000 mAh (pin tiểu) có thời gian sạc tối thiểu 12 tiếng thì đầy với bộ sạc C807B
- Pin AAA 600mAh (pin đũa) có thời gian sạc tối thiểu 3 tiếng thì đầy với bộ sạc C807B
- Pin AAA 1100mAh (pin đũa) có thời gian sạc tối thiểu 9 tiếng thì đầy với bộ sạc C807B

4. Công dụng:
- Pin sạc AA (pin tiểu) thường được dùng cho mic không dây, đồng hồ treo tường, đồ chơi trẻ em loại dùng ít pin, đèn flash máy ảnh, chuột bay, điều khiển smartTV loại dùng pin tiểu,...
- Pin AAA (pin đũa, bé hơn pin tiểu), thường được dùng cho điều khiển tivi, điều hòa, máy mát xa mặt,...

5. Chế độ bảo hành/đổi trả:
- Bảo hành 1 tháng
- Hàng không ưng ý, có thể trả lại trong vòng 1 tuần.
- Mua nhầm hàng, có thể đổi hàng khác, nhưng quý khách chịu cước ship giúp shop. 

6. Thông tin nhà cung cấp: 
- Cửa hàng Bán lẻ 24 giờ
- Địa chỉ: Khuất Duy Tiến, Thanh Xuân, Hà Nội
- ĐT/Zalo: 0912585886</span>`,
  },
  {
    key: 2,
    name: "Chi tiết",
    description: `
      <ul>
        <li>Chemistry: Ni-CD</li>
        <li>Voltage: 12V</li>
        <li>AmpHours: 2000mAh</li>
        <li>Dimensions: 109.75x79.55x62.20mm</li>
      </ul>
    `,
  },
  {
    key: 3,
    name: "Video",
    description: `
      <iframe src="//www.youtube.com/embed/QZd7015XaTQ" allowfullscreen="" style="width: 100%; height: 400px;":></iframe>
    `,
  },
  {
    key: 4,
    name: "Giao hàng & đổi trả",
    description: `<p>&nbsp;<span style="background-color: white; color: rgba(0, 0, 0, 0.8); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, 文泉驛正黑, &quot;WenQuanYi Zen Hei&quot;, &quot;Hiragino Sans GB&quot;, &quot;儷黑 Pro&quot;, &quot;LiHei Pro&quot;, &quot;Heiti TC&quot;, 微軟正黑體, &quot;Microsoft JhengHei UI&quot;, &quot;Microsoft JhengHei&quot;, sans-serif; font-size: 14px; white-space: pre-wrap;">1. Một số lưu ý:  </span></p><span style="background-color: white; color: rgba(0, 0, 0, 0.8); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, 文泉驛正黑, &quot;WenQuanYi Zen Hei&quot;, &quot;Hiragino Sans GB&quot;, &quot;儷黑 Pro&quot;, &quot;LiHei Pro&quot;, &quot;Heiti TC&quot;, 微軟正黑體, &quot;Microsoft JhengHei UI&quot;, &quot;Microsoft JhengHei&quot;, sans-serif; font-size: 14px; white-space: pre-wrap;">- Pin sạc NiMh có điện áp 1,2v, dùng thay cho pin 1,5v. Tuy nhiên, có thể không phù hợp với máy hút sữa Philips Avent, chuột Fuhlen, máy đo huyết áp và một số thiết bị điện tử đòi đúng 1,5v. 
- Không được sạc pin loại dùng một lần mua ở tiệm, cố tình sạc thì sẽ xảy ra cháy nổ, không được bảo hành.
- Quý khách chưa có sạc thì chọn pin + sạc, quý khách đã có sạc hoặc mua thêm pin thì chọn pin lẻ để tránh nhầm lẫn

2. Thông số bộ sạc Beston C807B: 
- Điện áp vào: 100V-240V, 50/60Hz, 0.5W Max
- Tốc độ sạc: pin AA là 200mA , cho pin AAA là 100mA, có thể sạc cùng lúc pin AA và AAA
- Là sạc không tự ngắt, không báo đầy, đèn vẫn đỏ trong suốt quá trình sạc, không chuyển sang màu xanh. 
- Dòng sạc thấp giúp chất lượng sạc tốt, không bị pin ảo, tuổi thọ của pin được bền hơn, độ tin cậy cao. Nếu để quá thời gian không làm ảnh hưởng tới chất lượng của pin, nhưng không nên để quá vài ngày.

3. Thông số pin sạc AA và AAA của hãng Beston:
- Pin AA 1200mAh (pin tiểu) có thời gian sạc tối thiểu 6,5 tiếng thì đầy với bộ sạc C807B
- Pin AA 2000mAh (pin tiểu) có thời gian sạc tối thiểu 10 tiếng thì đầy với bộ sạc C807B
- Pin AA 3000 mAh (pin tiểu) có thời gian sạc tối thiểu 12 tiếng thì đầy với bộ sạc C807B
- Pin AAA 600mAh (pin đũa) có thời gian sạc tối thiểu 3 tiếng thì đầy với bộ sạc C807B
- Pin AAA 1100mAh (pin đũa) có thời gian sạc tối thiểu 9 tiếng thì đầy với bộ sạc C807B

4. Công dụng:
- Pin sạc AA (pin tiểu) thường được dùng cho mic không dây, đồng hồ treo tường, đồ chơi trẻ em loại dùng ít pin, đèn flash máy ảnh, chuột bay, điều khiển smartTV loại dùng pin tiểu,...
- Pin AAA (pin đũa, bé hơn pin tiểu), thường được dùng cho điều khiển tivi, điều hòa, máy mát xa mặt,...

5. Chế độ bảo hành/đổi trả:
- Bảo hành 1 tháng
- Hàng không ưng ý, có thể trả lại trong vòng 1 tuần.
- Mua nhầm hàng, có thể đổi hàng khác, nhưng quý khách chịu cước ship giúp shop. 

6. Thông tin nhà cung cấp: 
- Cửa hàng Bán lẻ 24 giờ
- Địa chỉ: Khuất Duy Tiến, Thanh Xuân, Hà Nội
- ĐT/Zalo: 0912585886</span>`,
  },
  {
    key: 5,
    name: "Đánh giá",
    main: <Comment key={5} />,
  },
];

export { tab };
