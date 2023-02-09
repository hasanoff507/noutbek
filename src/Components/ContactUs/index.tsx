import React from "react";
import { Container } from "./styled";

import { Button, Form, Input, InputNumber } from "antd";

type Props = {};

const ContactUs: React.FC<Props> = ({ }: Props) => {
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 }
    };

    const validateMessages = {
        required: "${label} is required!",
        types: {
            email: "${label} is not a valid email!",
            number: "${label} is not a valid number!"
        },
        number: {
            range: "${label} must be between ${min} and ${max}"
        }
    };
    const onFinish = (values: any) => {
        console.log(values);
    };

    return (
        <Container>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div>
                    <h1>Biz bilan bog’lanish</h1>
                    <h5>Xabar qoldiring</h5>
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{ maxWidth: 600 }}
                        validateMessages={validateMessages}
                    >
                        <Form.Item
                            name={["user", "name"]}
                            rules={[{ required: true }]}
                        >
                            <Input placeholder="Ism, familya*"/>
                        </Form.Item>
                        <Form.Item
                            name={["user", "website"]}
                            rules={[{ required: true }]}
                        >
                            <Input addonBefore="+998"  placeholder="Telefon raqam*"/>
                        </Form.Item>
                        <Form.Item
                            name={["user", "introduction"]}
                            rules={[{ required: true }]}
                        >
                            <Input.TextArea placeholder="Xabar*"/>
                        </Form.Item>
                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default ContactUs;
