import "./App.css";
import Info from "./components/Info";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="actions">
          <input type="text" placeholder="Nhập tên" />
          <input type="phone" placeholder="Nhập số điện thoại" />
          <button>Thêm</button>
        </div>
        <div className="diver" />
        <div className="actions">
          <input type="text" placeholder="Nhập tên" />
          <button>Tìm </button>
          <button>Xóa trùng</button>
        </div>
        <div className="info-list">
          <Info name="Dung" phone="32456789" />
          <Info name="Dung1" phone="32456789" />
          <Info name="Dung2" phone="32456789" />
          <Info name="Dung3" phone="32456789" />
          <Info name="Dung4" phone="32456789" />
          <Info name="Dung5" phone="32456789" />
          <Info name="Dung6" phone="32456789" />
        </div>
      </div>
    </div>
  );
}

export default App;
