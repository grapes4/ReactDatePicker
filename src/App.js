import React, { Component } from 'react';
import DatePicker from 'antd/lib/date-picker';
import 'antd/lib/date-picker/style/css';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');


class App extends Component {
  disabledDate = (current) => {
    if(current.valueOf() < moment(Date.now())) {
      return true;
    }
    if(current.valueOf() > moment('2017-09-01', 'YYYY-MM-DD')){
      return true;
    }
  }

  render() {
    return (
      <DatePicker
        defaultValue={moment(Date.now())}
        disabledDate={this.disabledDate}
      />
    );
  }
}

export default App;
