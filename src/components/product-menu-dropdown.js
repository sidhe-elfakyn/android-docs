import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '@mapbox/react-icon';

class ProductMenuDropdown extends React.PureComponent {
  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        productCategory: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        products: PropTypes.arrayOf(
          PropTypes.shape({
            name: PropTypes.string,
            url: PropTypes.string,
            items: PropTypes.arrayOf(
              PropTypes.shape({
                text: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired
              })
            )
          })
        ).isRequired
      })
    ).isRequired
  };

  render() {
    const categoryLength = this.props.categories.length;
    const activeDotStyle = {
      content: '',
      width: '6px',
      height: '6px',
      borderRadius: '3px',
      background: '#4264fb',
      position: 'absolute',
      margin: '10px 0 0 -12px',
      display: 'none'
    };
    const allCategories = this.props.categories.map((category, index) => {
      const allProducts = category.products.map((product, index) => {
        const liClasses = classnames('mt6 relative ', {
          'txt-bold': product.url && location.pathname.indexOf(product.url) > -1
        });
        const dotClasses = classnames({
          'inline-block': location.pathname.indexOf(product.url) > -1,
          none: location.pathname.indexOf(product.url) < 0
        });
        return (
          <li className={liClasses} key={index}>
            <div style={activeDotStyle} className={dotClasses} />
            <a href={product.url} className="color-blue-on-hover">
              {product.name}
            </a>
          </li>
        );
      });
      const categoryClasses = classnames('wmin240 py24', {
        'border-b border--gray-light': index < categoryLength - 1
      });
      return (
        <div className={categoryClasses} key={index}>
          <div className="txt-bold color-gray">
            <Icon
              name={category.icon}
              inline={true}
              className="icon mb-neg6 mr6 h20 w20 color-gray inline"
            />
            {category.productCategory}
          </div>
          <ul className="ml24">{allProducts}</ul>
        </div>
      );
    });
    return (
      <div>
        <div className="px24 pb24">{allCategories}</div>
        <div className="bg-gray-faint">
          <div className="py24 px24 txt-bold">
            <a href="/help/">Help page</a>
          </div>
        </div>
      </div>
    );
  }
}

export { ProductMenuDropdown };
