import React from 'react';
import { optionsToLabelMapper } from '../utils';
import { Label, DropdownButton, MenuItem } from 'react-bootstrap';
 
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

const TongueLabelMapper = optionsToLabelMapper(options);

class TongueForm extends React.Component {  
    constructor(props) {  
        super(props); 
        // this.handleChange = this.handleChange.bind(this);  
        // this.onChange = this.onChange.bind(this); 
        this.onChangeTongueCrack = this.onChangeTongueCrack.bind(this); 
        this.onChangeTongueFatThin = this.onChangeTongueFatThin.bind(this); 
        this.onChangeTongueCoatThickness = this.onChangeTongueCoatThickness.bind(this); 
        this.onChangeTongueCoatColor = this.onChangeTongueCoatColor.bind(this); 
        this.onChangeTongueNatureColor = this.onChangeTongueNatureColor.bind(this); 
    }  

    handleChange(id, v) {
        if (this.props.onChange) {
          const change = { [id]: { value: v, label: TongueLabelMapper[id][v] }};
          this.props.onChange(change);
        }
    }

    // onChange(event) {  
    //     switch (event.target.id) {
    //         case "0":
    //             this.handleChange("tongueCrack", event.target.value);
    //             break;
    //         case "1":
    //             this.handleChange("tongueFatThin", event.target.value);
    //             break;
    //         case "2":
    //             this.handleChange("tongueCoatThickness", event.target.value);
    //             break;
    //         case "3":
    //             this.handleChange("tongueCoatColor", event.target.value);
    //             break;
    //         case "4":
    //             this.handleChange("tongueNatureColor", event.target.value);
    //             break;
    //         default:
    //             break;
    //     }
    // }  

    onChangeTongueCrack(eventKey, event) {  
        this.handleChange("tongueCrack", eventKey);
    }  

    onChangeTongueFatThin(eventKey, event) {  
        this.handleChange("tongueFatThin", eventKey);
    }  
    
    onChangeTongueCoatThickness(eventKey, event) {  
        this.handleChange("tongueCoatThickness", eventKey);
    } 
    
    onChangeTongueCoatColor(eventKey, event) {  
        this.handleChange("tongueCoatColor", eventKey);
    } 
    
    onChangeTongueNatureColor(eventKey, event) {  
        this.handleChange("tongueNatureColor", eventKey);
    } 

    render() {  
        return (  
                <div>  
                    <Label bsStyle="success">舌裂纹：</Label> 
                        <DropdownButton bsStyle={'Primary'.toLowerCase()} title={this.props['tongue']['tongueCrack']['label']} id="0" onSelect={this.onChangeTongueCrack}>
                          <MenuItem eventKey="0">未检测到裂纹</MenuItem>
                          <MenuItem eventKey="1">成功检测到裂纹</MenuItem>
                        </DropdownButton> 
                    <Label bsStyle="success">舌胖瘦：</Label> 
                        <DropdownButton bsStyle={'Primary'.toLowerCase()} title={this.props['tongue']['tongueFatThin']['label']} id="1" onSelect={this.onChangeTongueFatThin}>
                          <MenuItem eventKey="0">正常</MenuItem>
                          <MenuItem eventKey="1">胖舌</MenuItem>
                        </DropdownButton>    
                    <Label bsStyle="success">舌苔厚薄：</Label> 
                        <DropdownButton bsStyle={'Primary'.toLowerCase()} title={this.props['tongue']['tongueCoatThickness']['label']} id="1" onSelect={this.onChangeTongueCoatThickness}>
                          <MenuItem eventKey="0">薄</MenuItem>
                          <MenuItem eventKey="1">厚</MenuItem>
                        </DropdownButton> 
                    <Label bsStyle="success">舌苔颜色：</Label> 
                        <DropdownButton bsStyle={'Primary'.toLowerCase()} title={this.props['tongue']['tongueCoatColor']['label']} id="1" onSelect={this.onChangeTongueCoatColor}>
                          <MenuItem eventKey="0">苔白</MenuItem>
                          <MenuItem eventKey="1">苔黄</MenuItem>
                        </DropdownButton> 
                    <Label bsStyle="success">舌质颜色：</Label> 
                        <DropdownButton bsStyle={'Primary'.toLowerCase()} title={this.props['tongue']['tongueNatureColor']['label']} id="1" onSelect={this.onChangeTongueNatureColor}>
                          <MenuItem eventKey="0">舌暗红</MenuItem>
                          <MenuItem eventKey="1">舌淡白</MenuItem>
                          <MenuItem eventKey="2">舌淡红</MenuItem>
                          <MenuItem eventKey="3">舌红</MenuItem>
                          <MenuItem eventKey="4">舌深红（舌紫）</MenuItem>
                        </DropdownButton> 
                </div>  
        )  
    }  
}  

export default TongueForm;