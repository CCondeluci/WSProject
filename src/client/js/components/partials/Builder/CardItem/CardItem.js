import React, { Component } from 'react';
import { List, Button, Icon, Avatar } from 'antd';

import CardItemIcon from './CardItemIcon';

import { addDeckCard, removeDeckCard, selectCard } from 'Actions/BuilderActions';

class CardItem extends Component {

	render(){
		const { card } = this.props;

		return(
			<List.Item 
			onMouseEnter={ () => selectCard({card})}
			className="card-item">
				<List.Item.Meta 
					avatar={<CardItemIcon card={card} />}
					title={`${card.name} ${card.quantity ? `(${card.quantity})` : ''}`}
				/>
				<Button.Group>
					<Button icon="minus" className="danger" size="small" onClick={ () => removeDeckCard(card) }></Button>
					<Button icon="plus" className="success" size="small" onClick={ () => addDeckCard(card) }></Button>
				</Button.Group>
			</List.Item>
		)
	}
}

export default CardItem;