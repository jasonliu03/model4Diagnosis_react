import React from 'react';
 
const options = [
  {
    optionText: '0->未检测到裂纹,1->成功检测到裂纹',
    label: '舌裂纹',
    id: 'tongueCrack',
  },

  {
    optionText: '0->正常,1->胖舌',
    label: '舌胖瘦',
    id: 'tongueFatThin',
  },

  {
    optionText: '0->薄,1->厚',
    label: '舌苔厚薄',
    id: 'tongueCoatThickness',
  },

  {
    optionText: '0->苔白,1->苔黄',
    label: '舌苔颜色',
    id: 'tongueCoatColor',
  },

  {
    optionText: '0->舌暗红,1->舌淡白,2->舌淡红,3->舌红,4->舌深红（舌紫）',
    label: '舌质颜色',
    id: 'tongueNatureColor',
  },
];

export const defaultTongueAnswers = {
  tongueCrack: { value: '0', label: '未检测到裂纹' },
  tongueFatThin: { value: '0', label: '正常' },
  tongueCoatThickness: { value: '0', label: '薄' },
  tongueCoatColor: { value: '0', label: '苔白' },
  tongueNatureColor: { value: '0', label: '舌暗红' }
};

class TongueForm extends React.Component {  
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
                this.handleChange("tongueCrack", event.target.value);
                break;
            case "1":
                this.handleChange("tongueFatThin", event.target.value);
                break;
            case "2":
                this.handleChange("tongueCoatThickness", event.target.value);
                break;
            case "3":
                this.handleChange("tongueCoatColor", event.target.value);
                break;
            case "4":
                this.handleChange("tongueNatureColor", event.target.value);
                break;
            default:
                break;
        }
    }  

    render() {  
        return (  
                <div>  
                    <label>舌裂纹：  
                        <select id="0" onChange={this.onChange}>  
                            <option value="0">"未检测到裂纹"</option>   
                            <option value="1">"成功检测到裂纹"</option> 
                        </select>  
                    </label>  
                    <label>舌胖瘦：  
                        <select id="1" onChange={this.onChange}>  
                            <option value="0">"正常"</option>   
                            <option value="1">"胖舌"</option>
                        </select>  
                    </label>  
                    <label>舌苔厚薄：  
                        <select id="2" onChange={this.onChange}>  
                            <option value="0">"薄"</option>   
                            <option value="1">"厚"</option>  
                        </select>  
                    </label>  
                    <label>舌苔颜色  
                        <select id="3" onChange={this.onChange}>  
                            <option value="0">"苔白"</option>   
                            <option value="1">"苔黄"</option>  
                        </select>  
                    </label>  
                    <label>舌质颜色  
                        <select id="4" onChange={this.onChange}>  
                            <option value="0">"舌淡白"</option>   
                            <option value="1">"舌淡红"</option>  
                            <option value="2">"舌红"</option>   
                            <option value="3">"舌暗红"</option>  
                            <option value="4">"舌深红（舌紫）"</option> 
                        </select>  
                    </label>  
                </div>  
        )  
    }  
}  

export default TongueForm;