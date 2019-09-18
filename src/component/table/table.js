import React from 'react';
import DetailButton from '../button/button';
import { Table, Container, Checkbox, Button, Dropdown, Rating, Icon } from 'semantic-ui-react'

function DataTable() {
  return (
    <Container fluid="0" className="p-2 md-s">
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <div className="align-center">
                <Checkbox />
                <Dropdown icon="angle down">
                  <Dropdown.Menu>
                    <Dropdown.Item text='Select All' />
                    <Dropdown.Item text='Deselct All' />
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Table.HeaderCell>
            <Table.HeaderCell textAlign='center' className="w-35">Product Information<Icon name='sort'/></Table.HeaderCell>
            <Table.HeaderCell>Profit<Icon name='sort'/></Table.HeaderCell>
            <Table.HeaderCell>margin<Icon name='sort'/></Table.HeaderCell>
            <Table.HeaderCell>Unit Sold<Icon name='sort'/></Table.HeaderCell>
            <Table.HeaderCell>Profit/ Mo<Icon name='sort'/></Table.HeaderCell>
            <Table.HeaderCell>ROI<Icon name='sort'/></Table.HeaderCell>
            <Table.HeaderCell><div className="flex-justify"><div>Other Sort <Icon name='angle down'/></div><img width="30px" height="30px" src={require('../../assets/img/download.svg')} alt="" /></div></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <div className="topseller-box">
                <div className="seller">
                  <img width="19px" height="10px" src={require('../../assets/img/crown.icon.svg')} alt="" />
                  Top Seller
            </div>
                <div className="flex-justify">
                  <Checkbox />
                  <img width="90px" height="90px" src={require('../../assets/img/seller-1.png')} alt="" />
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <h2>Toddler Fishing Game Gifts for 2 3 Year Old Girl and Boy Toys Birthday
                <span className="block right aligned"><Rating icon='star' defaultRating={5} maxRating={5} /> <small>500 reviews</small></span></h2>
              <Table className="product-info">
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <p><small>by <a href='#'>Top Bright
                      <span className="block">Toys & Games › Learning & Education</span></a></small>
                      </p>
                      <p className="align-center mt-1">
                        <img className="mr-1" src={require('../../assets/img/flag.png')} alt="" />
                        <label>B078WLH42J</label>
                      </p>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                      <p>Price:<span className="price">$23.99</span></p>
                      <p>#421 in Toys & Games</p>
                      <p className="prime-choice"> <img className="mr-1" src={require('../../assets/img/amazon-choice.png')} alt="" />
                        <img src={require('../../assets/img/amazon-prime.png')} alt="" />
                      </p>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Table.Cell>
            <Table.Cell>$5.68 /item</Table.Cell>
            <Table.Cell>29%</Table.Cell>
            <Table.Cell>192 /day<br />5,777 /mo</Table.Cell>
            <Table.Cell>$32,813.36</Table.Cell>
            <Table.Cell>100%</Table.Cell>
            <Table.Cell>
              <Button className="track_btn"> <img src={require('../../assets/img/track.png')} alt="" />
                Track Now <span className="rating_wrap"> Rating <span className="rating">9.3</span>
                </span>
              </Button>

              <DetailButton />
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>
              <div className="topseller-box">
                <div className="seller">
                  <img width="19px" height="10px" src={require('../../assets/img/crown.icon.svg')} alt="" />
                  Top Seller
            </div>
                <div className="flex-justify">
                  <Checkbox />
                  <img width="90px" height="90px" src={require('../../assets/img/seller-2.png')} alt="" />
                </div>
              </div>
            </Table.Cell>
            <Table.Cell>
              <h2>Melissa & Doug Deluxe Pounding Bench Wooden Toy with Mallet (Develop …
                <span className="block right aligned"><Rating icon='star' defaultRating={5} maxRating={5} /> <small>2,204 reviews</small></span></h2>
              <Table className="product-info">
                <Table.Body>
                  <Table.Row>
                    <Table.Cell>
                      <p><small>by <a href='#'>Top Bright
                      <span className="block">Toys & Games › Baby & Toddler Toys › Hammering & Pounding Toys</span></a></small>
                      </p>
                      <p className="align-center mt-1">
                        <img className="mr-1" src={require('../../assets/img/flag.png')} alt="" />
                        <label>B004NCEL4M</label>
                      </p>
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                      <p>Price:<span className="price">$15.49</span></p>
                      <p>#421 in Toys & Games</p>
                      <p className="prime-choice"> <img className="mr-1" src={require('../../assets/img/amazon-choice.png')} alt="" />
                        <img src={require('../../assets/img/amazon-prime.png')} alt="" />
                      </p>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </Table.Cell>
            <Table.Cell>$3.78 /item</Table.Cell>
            <Table.Cell>24.4%</Table.Cell>
            <Table.Cell>344 /day<br />10,345 /mo</Table.Cell>
            <Table.Cell>$39,104.1</Table.Cell>
            <Table.Cell>120%</Table.Cell>
            <Table.Cell>
              <Button className="track_btn"> <img src={require('../../assets/img/track.png')} alt="" />
                Track Now <span className="rating_wrap"> Rating <span className="rating">9.3</span>
                </span>
              </Button>

              <DetailButton />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>

    </Container>

  );
}

export default DataTable;
