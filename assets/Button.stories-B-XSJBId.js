import{d as k,b as q,e as $,f as i,n as C,u as S,g as w,o as u,j as p,k as c}from"./vue.esm-bundler-BK9iHkhK.js";import{V as m,_ as D}from"./VIcon-DsvxrA6F.js";const M=["disabled"],z=k({__name:"VButton",props:{variant:{default:"default"},color:{default:"primary"},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},prependIcon:{default:""},appendIcon:{default:""},icon:{type:Boolean,default:!1},size:{default:"medium"},height:{default:""},block:{type:Boolean,default:!1},nameIcon:{default:""},sizeIcon:{default:""}},emits:["click"],setup(t){const a=t,l=w(),I=q(()=>({[l[`_${a.size}`]]:a.size,[l[`_${a.color}`]]:a.color,[l._disabled]:a.disabled}));return(e,d)=>(u(),$("button",{disabled:e.disabled,class:C([S(l).VButton,I.value]),onClick:d[0]||(d[0]=L=>e.$emit("click"))},[i(e.$slots,"left-icon",{},()=>[e.nameIcon?(u(),p(m,{key:0,name:e.nameIcon,size:e.sizeIcon},null,8,["name","size"])):c("",!0)]),i(e.$slots,"default"),i(e.$slots,"right-icon",{},()=>[e.nameIcon?(u(),p(m,{key:0,name:e.nameIcon,size:e.sizeIcon},null,8,["name","size"])):c("",!0)])],10,M))}}),N="_VButton_shxpi_115",P="__disabled_shxpi_124",T="__small_shxpi_128",E="__medium_shxpi_132",O="__large_shxpi_136",j="__primary_shxpi_140",A="__secondary_shxpi_156",F={VButton:N,_disabled:P,_small:T,_medium:E,_large:O,_primary:j,_secondary:A},H={$style:F},r=D(z,[["__cssModules",H]]);z.__docgenInfo={exportName:"default",displayName:"VButton",description:"",tags:{},props:[{name:"variant",description:"Variant of the Button",tags:{type:[{title:"type",type:{name:" 'default' | 'text' | 'outline' | 'ghost'"},description:""}],default:[{description:"'default'",title:"default"}],example:[{description:'<Button variant="default" />',title:"example"}]},required:!1,type:{name:"ButtonType"},defaultValue:{func:!1,value:"'default'"}},{name:"color",description:"Color of the Button",tags:{type:[{title:"type",type:{name:" 'primary' | 'secondary' | 'danger'"},description:""}],default:[{description:"'primary'",title:"default"}],example:[{description:'<Button color="primary" />',title:"example"}]},required:!1,type:{name:"ButtonColor"},defaultValue:{func:!1,value:"'primary'"}},{name:"loading",description:"Loading state of the Button",tags:{type:[{title:"type",type:{name:" boolean "}}],default:[{description:"false",title:"default"}],example:[{description:"<Button loading />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"disabled",description:"Disabled state of the Button",tags:{type:[{title:"type",type:{name:" boolean "}}],default:[{description:"false",title:"default"}],example:[{description:"<Button disabled />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"prependIcon",description:"Prepend icon of the Button",tags:{type:[{title:"type",type:{name:" string "}}],default:[{description:"''",title:"default"}],example:[{description:'<Button prependIcon="icon" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"appendIcon",description:"Append icon of the Button",tags:{type:[{title:"type",type:{name:" string "}}],default:[{description:"''",title:"default"}],example:[{description:'<Button appendIcon="icon" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"icon",description:"Only icon state of the Button",tags:{type:[{title:"type",type:{name:" boolean "}}],default:[{description:"false",title:"default"}],example:[{description:"<Button icon />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"size",description:"Size of the Button",tags:{type:[{title:"type",type:{name:" 'small' | 'medium' | 'large' "}}],default:[{description:"'medium'",title:"default"}],example:[{description:'<Button size="small" />',title:"example"}]},required:!1,type:{name:"ButtonSize"},defaultValue:{func:!1,value:"'medium'"}},{name:"height",description:"Height of the Button",tags:{type:[{title:"type",type:{name:" string "}}],default:[{description:"''",title:"default"}],example:[{description:'<Button height="40" />',title:"example"}]},required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"block",description:"Block state of the Button",tags:{type:[{title:"type",type:{name:" boolean "}}],default:[{description:"false",title:"default"}],example:[{description:"<Button block />",title:"example"}]},required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"nameIcon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"sizeIcon",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"''"}}],events:[{name:"click"}],slots:[{name:"left-icon"},{name:"default"},{name:"right-icon"}],sourceFiles:["C:/code/live/belython-ui-kit/src/components/buttons/button/VButton.vue"]};const K={title:"Button",component:r,argTypes:{disabled:{control:{type:"boolean"},defaultValue:!1},size:{control:{type:"radio"},options:["small","medium","large"],defaultValue:"medium"},color:{control:{type:"select"},options:["primary","secondary"],defaultValue:"primary"}}},V=t=>({components:{Button:r},setup(){return{args:t}},template:`
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args" size="large">Button</Button>
      <Button v-bind="args" size="medium">Button</Button>
      <Button v-bind="args" size="small">Button</Button>
    </div>
  `}),s=t=>({components:{Button:r},setup(){return{args:t}},template:'<Button v-bind="args">Button</Button>'}),n=V.bind({});n.args={color:"primary"};const o=V.bind({});o.args={color:"secondary"};var f,y,B;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args">Button</Button>'
})`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var g,_,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args" size="large">Button</Button>
      <Button v-bind="args" size="medium">Button</Button>
      <Button v-bind="args" size="small">Button</Button>
    </div>
  \`
})`,...(b=(_=n.parameters)==null?void 0:_.docs)==null?void 0:b.source}}};var v,x,h;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="display: flex; flex-direction: row; gap: 12px;">
      <Button v-bind="args" size="large">Button</Button>
      <Button v-bind="args" size="medium">Button</Button>
      <Button v-bind="args" size="small">Button</Button>
    </div>
  \`
})`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const Q=["DefaultButton","PrimaryButton","SecondaryButton"];export{s as DefaultButton,n as PrimaryButton,o as SecondaryButton,Q as __namedExportsOrder,K as default};
