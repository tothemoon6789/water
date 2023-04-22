import "./style.scss";
// 1. TẠI ĐIỂM ĐI (điểm A)
//      1. Hình dạng.
// 1. display
//          1. maxwidth:
//          2. maxheight:
//          2. overflow:

//          3. border
//          4. borderradius
//          5. padding
//          6. margin
//          7 background color
//          8. color
//          9. font family
//          10. font weight
//          11. font style
//     2. Vị trí.
//          1. position : absolute, fixed
//          2. translate: translate X hoac Y
//     3. Chuyển động lúc đứng yên (Các component con)
//          1. animation component
//          2. transition
//     4. Chuyển động của các chức năng liên quan
// 1.1 Chuyển động từ A đến B
//     1. Thời gian
//          1. Animation
//          2. transition
//     2. Kiểu chuyển động
//          1. Animation
//          2. transition
// 2. TẠI ĐIỂM ĐẾN (Điểm B) ========= GIỐNG THÔNG TIN NHƯ TRÊN
//      1. Vị trí
//      2. Hình dạng
//      3. Chuyển động lúc compont cha đứng yên
//      4. Chuyển động của các chức năng liên quan
// 2.2 Chuyển động từ B về A
//     1. Thời gian
//     2. Kiểu chuyển động
interface ButtonProps {
  onClick?: () => void 
// name:string
}
const Button: React.FC<ButtonProps> = ({ onClick }) => {
  return (
    <button 

    onClick={onClick} 
    className="water-button">
      CLICK ME PLZ !
    </button>
  );
};
export default Button;
