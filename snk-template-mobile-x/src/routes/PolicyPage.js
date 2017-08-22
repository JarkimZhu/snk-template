import React from 'react';
import { connect } from 'dva';
import { WingBlank, Button, List, InputItem, Text, View } from 'antd-mobile';
import { createForm } from 'rc-form';

class PolicyPage extends React.Component {
  submit = () => {
    this.props.dispatch({
      type: 'policy/getPolicyInfo',
    });
  };

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <View style={{backgroundColor: 'white', height: '100%'}}>
        <WingBlank>
          <List>
            <InputItem placeholder="车架号" clear {...getFieldProps('frameNo')} />
            <List.Item>
              <Button size="large" type="primary" onClick={this.submit}>查询保单</Button>
            </List.Item>
          </List>
          <List>
            <List.Item extra={this.props.policy.carInfo.carName}>
              <Text>车型</Text>
            </List.Item>
            <List.Item extra={this.props.policy.carInfo.carCode}>
              <Text>车型编码</Text>
            </List.Item>
            <List.Item extra={this.props.policy.carInfo.seatCount}>
              <Text>座位数</Text>
            </List.Item>
          </List>
        </WingBlank>
      </View>
    );
  }
}

function mapStateToProps(state) {
  const { policy } = state;
  return {
    policy
  };
}

export default connect(mapStateToProps)(createForm({
  onFieldsChange(props, fields) {
    props.dispatch({
      type: 'policy/save',
      payload: fields,
    });
  } })(PolicyPage));
