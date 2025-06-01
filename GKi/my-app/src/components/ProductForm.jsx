import { useState, useEffect } from "react";
import { Form, Button, Alert } from "react-bootstrap";

/**
 * Component để thêm hoặc cập nhật sản phẩm
 * Props:
 * - onAddProduct: Hàm để thêm sản phẩm mới
 * - productToEdit: (optional) Sản phẩm cần cập nhật, null nếu đang thêm mới
 * - onUpdateProduct: (optional) Hàm để cập nhật sản phẩm
 * - onCancel: (optional) Hàm để hủy việc chỉnh sửa
 */
const ProductForm = ({
  onAddProduct,
  productToEdit,
  onUpdateProduct,
  onCancel,
}) => {
  // State để lưu thông tin sản phẩm
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    status: "Còn hàng",
  });

  // State để hiển thị thông báo lỗi
  const [errors, setErrors] = useState({});

  // State để xác định liệu form đang ở chế độ thêm hay sửa
  const [isEditing, setIsEditing] = useState(false);

  // useEffect để cập nhật form khi có sản phẩm cần chỉnh sửa
  useEffect(() => {
    if (productToEdit) {
      setProduct(productToEdit);
      setIsEditing(true);
    } else {
      resetForm();
      setIsEditing(false);
    }
  }, [productToEdit]);

  // Hàm reset form về trạng thái ban đầu
  const resetForm = () => {
    setProduct({
      name: "",
      description: "",
      price: "",
      status: "Còn hàng",
    });
    setErrors({});
  };

  // Hàm xử lý khi người dùng thay đổi giá trị trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });

    // Xóa lỗi khi người dùng đã sửa
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  // Hàm validate dữ liệu form
  const validateForm = () => {
    const newErrors = {};

    // Kiểm tra tên sản phẩm
    if (!product.name.trim()) {
      newErrors.name = "Vui lòng nhập tên sản phẩm";
    } else if (product.name.length > 30) {
      newErrors.name = "Tên sản phẩm không được quá 30 ký tự";
    }

    // Kiểm tra mô tả
    if (!product.description.trim()) {
      newErrors.description = "Vui lòng nhập mô tả sản phẩm";
    }

    // Kiểm tra giá
    if (!product.price) {
      newErrors.price = "Vui lòng nhập giá sản phẩm";
    } else if (isNaN(product.price) || parseFloat(product.price) < 0) {
      newErrors.price = "Giá sản phẩm phải là số dương";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Chuyển đổi giá thành số
      const formattedProduct = {
        ...product,
        price: parseFloat(product.price),
      };

      if (isEditing) {
        onUpdateProduct(formattedProduct);
      } else {
        onAddProduct(formattedProduct);
        resetForm();
      }
    }
  };

  // Hàm xử lý khi hủy chỉnh sửa
  const handleCancel = () => {
    resetForm();
    if (onCancel) onCancel();
  };

  return (
    <div className="mb-4 p-3 border rounded bg-light">
      <h3>{isEditing ? "Cập nhật sản phẩm" : "Thêm sản phẩm mới"}</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="productName">
          <Form.Label>Tên sản phẩm</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            isInvalid={!!errors.name}
            placeholder="Nhập tên sản phẩm"
          />
          {errors.name && (
            <Form.Control.Feedback type="invalid">
              {errors.name}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="productDescription">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            value={product.description}
            onChange={handleChange}
            isInvalid={!!errors.description}
            placeholder="Nhập mô tả sản phẩm"
            rows={3}
          />
          {errors.description && (
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="productPrice">
          <Form.Label>Giá</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            isInvalid={!!errors.price}
            placeholder="Nhập giá sản phẩm"
          />
          {errors.price && (
            <Form.Control.Feedback type="invalid">
              {errors.price}
            </Form.Control.Feedback>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="productStatus">
          <Form.Label>Trạng thái</Form.Label>
          <Form.Select
            name="status"
            value={product.status}
            onChange={handleChange}
          >
            <option value="Còn hàng">Còn hàng</option>
            <option value="Hết hàng">Hết hàng</option>
          </Form.Select>
        </Form.Group>

        <div className="d-flex gap-2">
          <Button variant="primary" type="submit">
            {isEditing ? "Cập nhật" : "Thêm sản phẩm"}
          </Button>
          {isEditing && (
            <Button variant="secondary" onClick={handleCancel}>
              Hủy
            </Button>
          )}
        </div>
      </Form>
    </div>
  );
};

export default ProductForm;
