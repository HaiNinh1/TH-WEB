import { Button, Badge } from "react-bootstrap";

/**
 * Component hiển thị một sản phẩm riêng lẻ
 * Props:
 * - product: Thông tin của sản phẩm cần hiển thị
 * - onDelete: Hàm xử lý khi xóa sản phẩm
 * - onEdit: Hàm xử lý khi chỉnh sửa sản phẩm
 * - onToggleStatus: Hàm xử lý khi thay đổi trạng thái sản phẩm
 */
const ProductItem = ({ product, onDelete, onEdit, onToggleStatus }) => {
  // Định dạng giá tiền thành dạng có dấu phân cách
  const formattedPrice = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(product.price);

  return (
    <div className="card mb-3">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="card-title">{product.name}</h5>
          <Badge
            bg={product.status === "Còn hàng" ? "success" : "danger"}
            className="ms-2"
          >
            {product.status}
          </Badge>
        </div>
        <p className="card-text">{product.description}</p>
        <p className="card-text">
          <strong>Giá: </strong> {formattedPrice}
        </p>

        <div className="d-flex gap-2">
          <Button variant="primary" size="sm" onClick={() => onEdit(product)}>
            Chỉnh sửa
          </Button>

          <Button
            variant={product.status === "Còn hàng" ? "warning" : "success"}
            size="sm"
            onClick={() => onToggleStatus(product.id)}
          >
            {product.status === "Còn hàng"
              ? "Đánh dấu hết hàng"
              : "Đánh dấu còn hàng"}
          </Button>

          <Button
            variant="danger"
            size="sm"
            onClick={() => onDelete(product.id)}
          >
            Xóa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
