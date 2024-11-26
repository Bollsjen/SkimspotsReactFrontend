import { Col, Divider, Row } from "antd";

export default function Home() {
    return (
        <Row>
            <Col span={12}>
                <h1>Hello World!</h1>
            </Col>
            <Col span={12}>
                <h3>Hello Universe!</h3>
            </Col>
        </Row>
    )
}