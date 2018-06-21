import React from 'react';

export default class Question extends React.Component {
    constructor(props) {  
      super(props);
      this.onChange = this.onChange.bind(this);  
    }   

    handleRadioChange(id, v) {
        if (this.props.onChange) {
          const change = { value: [v], id: String(Number(id)+1) }
          this.props.onChange(change);
        }
    }

    onChange(event) {  
        switch (event.target.id) {
            case "0":
                this.handleRadioChange(event.target.id, event.target.value);
                break;
            case "1":
                this.handleCheckboxChange(event.target.name, event.target.id);
                break;
            case "2":
                this.handleCheckboxChange(event.target.name, event.target.id);
                break;
            case "3":
                this.handleCheckboxChange(event.target.name, event.target.id);
                break;
            case "4":
                this.handleCheckboxChange(event.target.name, event.target.id);
                break;
            case "5":
                this.handleRadioChange(event.target.id, event.target.value);
                break;
            case "6":
                this.handleRadioChange(event.target.id, event.target.value);
                break;
            case "7":
                this.handleCheckboxChange(event.target.name, event.target.id);
                break;
            case "8":
                this.handleRadioChange(event.target.id, event.target.value);
                break;
            case "9":
                this.handleRadioChange(event.target.id, event.target.value);
                break;
            case "10":
                this.handleRadioChange(event.target.id, event.target.value);
                break;
            case "11":
                this.handleCheckboxChange(event.target.name, event.target.id);
                break;
            case "12":
                this.handleRadioChange(event.target.id, event.target.value);
                break;
            default:
                break;
        }
    }  

    handleCheckboxChange(name, id){
        var answers = [];
        var boxes = document.getElementsByName(name);
        for(var i=0; i<boxes.length; i++){
                if(boxes[i].checked){
                        answers.push(boxes[i].value);
                }    
        }
        if (this.props.onChange) {
          const change = { value: answers, id: String(Number(id)+1) }
          this.props.onChange(change);
        }
    }

  render() {
    const { answers } = this.props;
    let idx = 1;
    const moreProps = () => ({ chosen: answers[idx], id: idx++ });
    return (
      <form>
        <p>1.您自己觉得容易疲劳或乏力吗？</p>
        <p><input id="0" type="radio" name="q1" value="A" onChange={this.onChange} /> 是</p>
        <p><input id="0" type="radio" name="q1" value="B" onChange={this.onChange} /> 否</p>
        <p>2.您平时容易怕冷、怕热、或手足心热吗？</p>
        <p><input id="1" type="checkbox" name="q2" value="A" onChange={this.onChange} />A 怕冷(或手脚冰凉)</p>
        <p><input id="1" type="checkbox" name="q2" value="B" onChange={this.onChange} />B 怕热</p>
        <p><input id="1" type="checkbox" name="q2" value="C" onChange={this.onChange} />C 手足心热</p>
        <p><input id="1" type="checkbox" name="q2" value="D" onChange={this.onChange} />D 正常</p>
        <p>3.您平时容易出汗或晚上睡觉易出汗吗？</p>
        <p><input id="2" type="checkbox" name="q3" value="A" onChange={this.onChange} />A 活动汗出</p>
        <p><input id="2" type="checkbox" name="q3" value="B" onChange={this.onChange} />B 夜间出汗</p>
        <p><input id="2" type="checkbox" name="q3" value="C" onChange={this.onChange} />C 正常</p>
        <p>4.您平时小便怎么样？</p>
        <p><input id="3" type="checkbox" name="q4" value="A" onChange={this.onChange} />A 偏黄</p>
        <p><input id="3" type="checkbox" name="q4" value="B" onChange={this.onChange} />B 清长（色清，量多）</p>
        <p><input id="3" type="checkbox" name="q4" value="C" onChange={this.onChange} />C 夜尿频多</p>
        <p><input id="3" type="checkbox" name="q4" value="D" onChange={this.onChange} />D 正常</p>
        <p>5.您平时大便怎么样？</p>
        <p><input id="4" type="checkbox" name="q5" value="A" onChange={this.onChange} />A 偏干</p>
        <p><input id="4" type="checkbox" name="q5" value="B" onChange={this.onChange} />B 偏黏</p>
        <p><input id="4" type="checkbox" name="q5" value="C" onChange={this.onChange} />C 偏稀(或大便溏)</p>
        <p><input id="4" type="checkbox" name="q5" value="D" onChange={this.onChange} />D 正常</p>
        <p>6.您平时胃口怎么样？</p>
        <p><input id="5" type="radio" name="q6" value="A" onChange={this.onChange} /> 不好</p>
        <p><input id="5" type="radio" name="q6" value="B" onChange={this.onChange} /> 正常</p>
        <p>7.您平时容易口渴或口干吗？</p>
        <p><input id="6" type="radio" name="q7" value="A" onChange={this.onChange} /> 是</p>
        <p><input id="6" type="radio" name="q7" value="B" onChange={this.onChange} /> 否</p>
        <p>8.您平时觉得口中有异样的味道吗？</p>
        <p><input id="7" type="checkbox" name="q8" value="A" onChange={this.onChange} />A 甜</p>
        <p><input id="7" type="checkbox" name="q8" value="B" onChange={this.onChange} />B 苦</p>
        <p><input id="7" type="checkbox" name="q8" value="C" onChange={this.onChange} />C 黏</p>
        <p><input id="7" type="checkbox" name="q8" value="D" onChange={this.onChange} />D 口淡</p>
        <p><input id="7" type="checkbox" name="q8" value="E" onChange={this.onChange} />D 正常</p>
        <p>9.您平时容易心烦、情绪低落吗？</p>
        <p><input id="8" type="radio" name="q9" value="A" onChange={this.onChange} /> 是</p>
        <p><input id="8" type="radio" name="q9" value="B" onChange={this.onChange} /> 否</p>
        <p>10.您容易掉头发吗？</p>
        <p><input id="9" type="radio" name="q10" value="A" onChange={this.onChange} /> 是</p>
        <p><input id="9" type="radio" name="q10" value="B" onChange={this.onChange} /> 否</p>
        <p>11.您平时容易失眠吗？</p>
        <p><input id="10" type="radio" name="q11" value="A" onChange={this.onChange} /> 是</p>
        <p><input id="10" type="radio" name="q11" value="B" onChange={this.onChange} /> 否</p>
        <p>12.您平时身体有胀满不适吗？</p>
        <p><input id="11" type="checkbox" name="q12" value="A" onChange={this.onChange} />A 乳房胀</p>
        <p><input id="11" type="checkbox" name="q12" value="B" onChange={this.onChange} />B 食后腹胀</p>
        <p><input id="11" type="checkbox" name="q12" value="C" onChange={this.onChange} />C 胸胁胀满</p>
        <p><input id="11" type="checkbox" name="q12" value="D" onChange={this.onChange} />D 无</p>
        <p>13.您自己感觉腰膝酸软、腿脚无力吗？</p>
        <p><input id="12" type="radio" name="q13" value="A" onChange={this.onChange} /> 是</p>
        <p><input id="12" type="radio" name="q13" value="B" onChange={this.onChange} /> 否</p>
      </form>
    );
  }
}

