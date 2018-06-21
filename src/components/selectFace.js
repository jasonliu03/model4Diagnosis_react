import React from 'react';
import { optionsToLabelMapper } from '../utils';
 
const options = [
  {
    optionText: '0->面白,1->面黑,2->面红,3->面黄,4->面青,5->正常',
    label: '面色',
    id: 'faceColor',
  },

  {
    optionText: '0->有光泽,1->少光泽,2->无光泽',
    label: '面部光泽',
    id: 'faceGloss',
  },

  {
    optionText: '0->淡白,1->淡红,2->红,3->暗红,4->紫',
    label: '唇色',
    id: 'lipColor',
  },
];

export const defaultFaceAnswers = {
  faceColor: { value: '0', label: '面白' },
  faceGloss: { value: '0', label: '有光泽' },
  lipColor: { value: '0', label: '淡白' }
};

class FaceForm extends React.Component {
    constructor(props) {  
      super(props);
      this.handleChange = this.handleChange.bind(this);  
      this.onChange = this.onChange.bind(this);  
    }   

    handleChange(id, v) {
        if (this.props.onChange) {
          const change = { [id]: { value: v }};
          this.props.onChange(change);
        }
    }

    onChange(event) {  
        switch (event.target.id) {
            case "0":
                this.handleChange("faceColor", event.target.value);
                break;
            case "1":
                this.handleChange("faceGloss", event.target.value);
                break;
            case "2":
                this.handleChange("lipColor", event.target.value);
                break;
            default:
                break;
        }
    }  

    render() {  
        return (  
                <div>  
                    <label>面色：  
                        <select id="0" defaultValue={this.selectedIndex0} onChange={this.onChange}> 
                            <option value="0">"面白"</option>   
                            <option value="1">"面黑"</option>   
                            <option value="2">"面红"</option>   
                            <option value="3">"面黄"</option>   
                            <option value="4">"面青"</option>   
                            <option value="5">"正常"</option>  
                        </select>  
                    </label>  
                    <label>面部光泽：  
                        <select id="1" defaultValue={this.selectedIndex1} onChange={this.onChange}>  
                            <option value="0">"有光泽"</option>   
                            <option value="1">"少光泽"</option>   
                            <option value="2">"无光泽"</option>  
                        </select>  
                    </label>  
                    <label>唇色：  
                        <select id="2" defaultValue={this.selectedIndex2} onChange={this.onChange}>  
                            <option value="0">"淡白"</option>   
                            <option value="1">"淡红"</option>   
                            <option value="2">"红"</option>   
                            <option value="3">"暗红"</option>   
                            <option value="4">"紫"</option>   
                        </select>  
                    </label>  
                </div>  
        )  
    }  
}  

export default FaceForm;