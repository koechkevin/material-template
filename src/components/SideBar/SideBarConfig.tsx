import React, { FC, Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import useStyles from './SideBar.styles';
import { CustomAccordion } from '../CustomAccordion';

const config: any[] = [
  {
    label: 'Main',
    path: '',
    subMenus: [
      {
        label: 'sub',
        path: '',
      },
    ],
  },{
    label: 'Main',
    path: '',
    subMenus: [
      {
        label: 'sub',
        path: '',
      },
    ],
  },{
    label: 'Main',
    path: '',
  },{
    label: 'Main',
    path: '',
    subMenus: [
      {
        label: 'sub',
        path: '',
      },
    ],
  },
];

const Summaries: FC<any> = (props) => {
  const { subMenus } = props;
  const classes = useStyles();
  return (
    <Fragment>
      {subMenus.map((menu: any, index: number) => (
        <Fragment key={index}>
          <Link style={{ textDecoration: 'none'}} to={menu.path}>
            <div className={classes.link}>{menu.label}</div>
          </Link>
        </Fragment>
      ))}
    </Fragment>
  );
};
const SideBarConfig: FC<any> = () => {
  const [open, setOpen] = useState<any>();
  const onOpenChange = (val: boolean, index: number) => {
    setOpen(() => (val ? index : undefined));
  };

  const classes = useStyles();
  return (
    <Fragment>
      {config.map((link: any, index: number) => {
        if (link.subMenus) {
          return (
            <CustomAccordion
              icon={link.icon}
              title={link.label}
              key={index}
              summary={<Summaries subMenus={link.subMenus} />}
              open={open === index}
              onOpenChange={(val) => onOpenChange(val, index)}
            />
          );
        }
        return (
          <Link key={index} style={{ textDecoration: 'none'}} to={link.path}>
            <div style={{ padding: '0 0 0 16px', display: 'flex', alignItems: 'center' }} className={classes.link}>
              {link.icon}
              <Typography style={{ lineHeight: '32px', marginLeft: link.icon ? 8 : 0 }}>{link.label}</Typography>
            </div>
          </Link>
        );
      })}
    </Fragment>
  );
};
export default SideBarConfig;
