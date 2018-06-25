import React from 'react';
import { optionsToLabelMapper } from '../utils';
import { Label, DropdownButton, MenuItem } from 'react-bootstrap';
 
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

const FaceLabelMapper = optionsToLabelMapper(options);

class FaceForm extends React.Component {
    constructor(props) {  
      super(props);
      // this.handleChange = this.handleChange.bind(this);  
      // this.onChangeFaceColor = this.onChangeFaceColor.bind(this);  
    }   

    handleChange(id, v) {
        if (this.props.onChange) {
          const change = { [id]: { value: v, label:FaceLabelMapper[id][v] }};
          this.props.onChange(change);
        }
    }

    onChangeFaceColor(eventKey, event) {  
        this.handleChange("faceColor", eventKey);
    }  

    onChangeFaceGloss(eventKey, event) {  
        this.handleChange("faceGloss", eventKey);
    }  

    onChangeLipColor(eventKey, event) {  
        this.handleChange("lipColor", eventKey);
    } 


    render() {  
        return (  
                <div>  
                    <Label bsStyle="success">面色:</Label>
                        <DropdownButton bsStyle={'Primary'.toLowerCase()} title={this.props['face']['faceColor']['label']} key="0" id="0" onSelect={(eventKey, event) => {this.onChangeFaceColor(eventKey, event)}}>
                          <MenuItem eventKey="0">面白</MenuItem>
                          <MenuItem eventKey="1">面黑</MenuItem>
                          <MenuItem eventKey="2">面红</MenuItem>
                          <MenuItem eventKey="3">面黄</MenuItem>
                          <MenuItem eventKey="4">面青</MenuItem>
                          <MenuItem eventKey="5">正常</MenuItem>
                        </DropdownButton> 
                    <Label bsStyle="success">面部光泽：</Label> 
                        <DropdownButton bsStyle={'Primary'.toLowerCase()} title={this.props['face']['faceGloss']['label']} key="1" id="1" onSelect={(eventKey, event) => {this.onChangeFaceGloss(eventKey, event)}}>
                          <MenuItem eventKey="0">有光泽</MenuItem>
                          <MenuItem eventKey="1">少光泽</MenuItem>
                          <MenuItem eventKey="2">无光泽</MenuItem>
                        </DropdownButton>  
                    <Label bsStyle="success">唇色：</Label>  
                        <DropdownButton bsStyle={'Primary'.toLowerCase()} title={this.props['face']['lipColor']['label']} key="2" id="2" onSelect={(eventKey, event) => {this.onChangeLipColor(eventKey, event)}}>
                          <MenuItem eventKey="0">淡白</MenuItem>
                          <MenuItem eventKey="1">淡白</MenuItem>
                          <MenuItem eventKey="2">红</MenuItem>
                          <MenuItem eventKey="3">暗红</MenuItem>
                          <MenuItem eventKey="4">紫</MenuItem>
                        </DropdownButton>  
                </div>  
        )  
    }  
}  

export default FaceForm;