import React from 'react';
import { Form, Input, Button, Selector, ImageUploader, Toast } from 'antd-mobile';
import type { ImageUploadItem } from 'antd-mobile/es/components/image-uploader';

const App: React.FC = () => {
  const [fileList, setFileList] = React.useState<ImageUploadItem[]>([]);

  const handleSubmit = (values: any) => {
    console.log('提交内容：', values);
    Toast.show({ icon: 'success', content: '提交成功' });
  };

  return (
    <div style={{ background: '#f5f5f5', minHeight: '100vh', padding: '16px' }}>
      <Form
        layout="horizontal"
        onFinish={handleSubmit}
        footer={
          <Button block type="submit" color="primary">
            提交
          </Button>
        }
      >
        <Form.Item name="type" label="扣分类型" rules={[{ required: true }]}> 
          <Selector
            columns={1}
            options={[
              { label: '安全', value: 'safe' },
              { label: '服务', value: 'service' },
              { label: '卫生', value: 'hygiene' },
            ]}
          />
        </Form.Item>

        <Form.Item name="score" label="分数" rules={[{ required: true }]}> 
          <Input placeholder="请输入扣分分值" type="number" />
        </Form.Item>

        <Form.Item name="remark" label="备注" rules={[{ required: true }]}> 
          <Input.TextArea placeholder="请输入备注内容" rows={3} />
        </Form.Item>

        <Form.Item label="图片">
          <ImageUploader
            value={fileList}
            onChange={setFileList}
            upload={async (file) => {
              return {
                url: URL.createObjectURL(file),
              };
            }}
          />
        </Form.Item>
      </Form>
    </div>
  );
};

export default App;
