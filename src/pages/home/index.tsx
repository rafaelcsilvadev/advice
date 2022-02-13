import React, { useLayoutEffect, useState, FC, useCallback } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Layout from "../../components/layout";
import { monk } from "../../assets/images";
import { getAdvice } from "../../services/http";
import { delay, addClass } from "../../utils";

const Home: FC = () => {
	const [data, setData] = useState<null | string>(null);
	const [error, setError] = useState<null | string>(null);

	const handleGetAdvice = async () => {
		try {
			const result = await getAdvice();
			setData(result?.data.slip.advice);
		} catch (e) {
			const error = (e as Error).message;
			setError(error);
		}
	};

	const showAdvice: () => void = () => {
		delay(() => addClass("advice", "animation-advice-end"), 5500);
	};

	useLayoutEffect(() => {
		handleGetAdvice();
		showAdvice();
	}, []);

	return (
		<div>
			<Layout>
				<Container
					id="advice"
					className="h-75 d-flex align-items-center justify-content-center animation-advice-start"
					fluid
				>
					<Row className="align-items-center justify-content-between">
						<Col
							className="d-none d-md-flex justify-content-center"
							xs={12}
							md={6}
						>
							<img src={monk} alt="Monk" width="500rem" />
						</Col>
						<Col
							className="d-flex justify-content-center text-center"
							xs={12}
							md={6}
						>
							<Card className="bg-primary-rgba card-size">
								<Card.Body>
									<Card.Title className="text-center text-size-2-1_8 text-light">
										This is your advice
									</Card.Title>
									{data && !error && (
										<Card.Text className="text-center text-size-2-1 text-light">
											{data}
										</Card.Text>
									)}
									{!data && error && (
										<Card.Text className="text-center text-size-2-1 text-danger">
											{error}
										</Card.Text>
									)}
									{!data && !error && (
										<Card.Text className="text-center text-size-2-1 text-danger">
											Loading...
										</Card.Text>
									)}
									<div className="d-flex justify-content-center">
										<Button
											id="newAdviceButton"
											variant="secondary"
											className="bg-secondary text-decoration-none button-size-hover-start button-size-hover-end"
											onClick={() => {
												handleGetAdvice();
												setData(null);
												setError("");
											}}
										>
											New Advice
										</Button>
									</div>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</Layout>
		</div>
	);
};

export default Home;
