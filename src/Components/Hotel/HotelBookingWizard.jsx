import React, { Component } from 'react';

class HotelBookingWizard extends Component {
	state = {
		pageIndex: 0
	};

	render() {
		const renderProps = {
			navigateBack: this._navigateBack,
			navigateNext: this._navigateNext,
			pageIndex: this.state.pageIndex,
			renderPage: this._renderPage
		};
		return this.props.children(renderProps);
	}

	_navigateBack = () => {
		this.setState(prevState => ({
            pageIndex: prevState.pageIndex < 1 ? 1: prevState.pageIndex - 1
		}));
		console.log(this.state.pageIndex);
	};

	_navigateNext = () => {
		this.setState(prevState => ({
            pageIndex: prevState.pageIndex >=2? 3: prevState.pageIndex+1
		}));
		console.log(this.state.pageIndex);
	};

	_renderPage = formProps => {
		const { pageIndex } = this.state;

		const Page = this.props.pages[pageIndex];

		return (
			<React.Fragment>
				<Page
				{...formProps}
				navigateBack={this._navigateBack}
				navigateNext={this._navigateNext}
				pageIndex={pageIndex}
			/>
			</React.Fragment>
		);
	};
}

export default HotelBookingWizard;