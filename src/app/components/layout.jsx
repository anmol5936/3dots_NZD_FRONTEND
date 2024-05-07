'use client';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupportIcon from '@mui/icons-material/HelpOutline';
import ContactIcon from '@mui/icons-material/ContactSupport';
import DocsIcon from '@mui/icons-material/Description';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

function Layout(props) {

  const router = useRouter();
  const pathname = usePathname();
    const { window } = props;
  const {children} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [isCollapse,setIsCollapse] = React.useState(false);

  const handleCollapse = () => {
    setIsCollapse(!isCollapse);
  };


  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawer = (
    <div className='bg-slate-200'>
      <Toolbar >
      <img src='https://res.cloudinary.com/dzxgf75bh/image/upload/v1714995455/Three-Dots-300x269_kqpbra.jpg' height={30} width={30} className='mx-auto'/>
      </Toolbar>
      <Divider />
      <List>
      {['Dashboard', 'Analytics', 'Users', 'Projects','Message','Settings'].map((text, index) => (
          <ListItem key={text} disablePadding className={pathname.startsWith("/"+text.toLowerCase())?
          "text-sky-600 bg-slate-100":
          "text-slate-700"} onClick={()=>{router.push("/"+ text.toLowerCase())}}>
            <ListItemButton>
              <ListItemIcon className={pathname.startsWith("/"+text.toLowerCase())?
          "text-sky-600 bg-slate-100":
          "text-slate-700"}>
{index===0 && <SpaceDashboardIcon />}
{index=== 1 && <QueryStatsIcon />}
{index=== 2 && <PeopleAltIcon />}
{index=== 3 && <WorkIcon />}
{index=== 4 && <MailIcon />}
{index=== 5 && <SettingsIcon />}
{index=== 6 && <AccountCircleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
           <ListItem disablePadding onClick={handleCollapse} className={pathname.startsWith("/help")?
          "text-sky-600 bg-slate-100":
          "text-slate-700"}> 
            <ListItemButton>
              <ListItemIcon className={pathname.startsWith("/help")?
          "text-sky-600 bg-slate-100":
          "text-slate-700"}>
              <MailIcon/>
              </ListItemIcon>
              <ListItemText primary="Help" />
              {isCollapse? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </ListItemButton>
          </ListItem>
        
      </List>
      <Divider />
      <Collapse in={isCollapse} timeout="auto" unmountOnExit>
      <List className='ml-4'>
      {['Support', 'Contact', 'Docs'].map((text, index) => (
          <ListItem key={text} disablePadding className={pathname.startsWith("/help")?
          "text-sky-600 bg-slate-100":
          "text-slate-700"}>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <SupportIcon/>}
                  {index === 1 && <ContactIcon/>}
                  {index === 2 && <DocsIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      </Collapse>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
        className='bg-black'
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" className='text-white'>
          Corporate Net-Zero Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <main>{children}</main>
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
  children:PropTypes.array,
};

export default Layout;
