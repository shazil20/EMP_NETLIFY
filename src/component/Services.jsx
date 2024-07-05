import React from 'react';
import { motion } from 'framer-motion';
import { makeStyles } from '@material-ui/core/styles';
import NavbarComponent from './Navbar';
import Footer from './Footer';
import Scrolltop from './Scrolltop';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoneyIcon from '@material-ui/icons/Money';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ScheduleIcon from '@material-ui/icons/Schedule';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import GoBackButton from './GoBackButton';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    color: theme.palette.text.primary,
    width: '100%'
  },
  serviceCard: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    height: '100%',
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[2],
  },
  serviceList: {
    padding: 0,
  },
  serviceListItem: {
    alignItems: 'flex-start',
  },
  serviceIcon: {
    minWidth: '40px',
    color: theme.palette.primary.main,
  },
}));

function Services() {
  const classes = useStyles();

  const services = [
    {
        title: 'Effortless Payroll Management',
        description: [
          'Say goodbye to manual calculations and errors',
          'Secure system for timely and accurate payments',
          'Generate detailed payroll reports',
        ],
        icon: <MoneyIcon className={classes.serviceIcon} />,
      },
      {
        title: 'Intuitive Admin Dashboard Management',
        description: [
          'Gain a centralized view of your entire workforce',
          'Track key performance indicators (KPIs)',
          'Easily access essential HR functionalities',
        ],
        icon: <DashboardIcon className={classes.serviceIcon} />,
      },
      {
        title: 'Streamlined Leave Management',
        description: [
          'Employees request, track, and manage leaves',
          'Automate leave approvals based on workflows',
          'Gain insights into leave trends for staffing',
        ],
        icon: <ScheduleIcon className={classes.serviceIcon} />,
      },
      {
        title: 'Effective Notification Management',
        description: [
          'Keep employees informed with timely and personalized notifications',
          'Streamline communication regarding announcements, policy updates',
          'Schedule automated notifications for birthdays, work anniversaries',
        ],
        icon: <NotificationsIcon className={classes.serviceIcon} />,
      },
      {
        title: 'Enhanced Productivity with To-Do Lists',
        description: [
          'Foster accountability with individual and team-based to-do lists',
          'Set deadlines, track progress, collaborate seamlessly on tasks',
          'Improve workflow efficiency and ensure timely task completion',
        ],
        icon: <AssignmentIcon className={classes.serviceIcon} />,
      },
      {
        title: 'Empowering Employee Portal',
        description: [
          'Self-service portal for pay stubs, leave balances, company policies',
          'Update personal details and download important documents',
          'Foster a sense of ownership and improve employee engagement',
        ],
        icon: <LockOpenIcon className={classes.serviceIcon} />,
      },
  ];

  return (
    <>
      <div className="container text-center mt-5" style={{ marginTop: '5rem', paddingTop: '5rem' }}>
        <motion.h2
          style={{ fontSize: '5rem', fontWeight: '700' }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our services to make you process streamlined
        </motion.h2>

          </div>
          <div className='container'>
        <div className={classes.root}>
          <NavbarComponent />
          <Grid container spacing={5} justifyContent="center">
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={classes.serviceCard}>
                    <CardContent>
                      <Typography variant="h5" component="h2" gutterBottom>
                        {service.title}
                      </Typography>
                      <List className={classes.serviceList}>
                        {service.description.map((desc, index) => (
                          <ListItem key={index} className={classes.serviceListItem}>
                            <ListItemIcon>{service.icon}</ListItemIcon>
                            <ListItemText primary={desc} />
                          </ListItem>
                        ))}
                      </List>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
      </div>

          <Scrolltop />
        </div>
      <Footer />
      <GoBackButton/>
    </>
  );
}

export default Services;