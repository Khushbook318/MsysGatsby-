import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = (props) => {
  // console.log(props)
  // console.log(keys)
  return (
    <>
      <header className="header clear mainHeader wow fadeIn" role="banner">
        <div className="container containerModified">
          <nav className="navbar navbar-expand-lg navbar-light mainHeaderNav">
            <div className="logo">
              <Link to="https://staging.msystechnologies.com">
                <StaticImage className="logo-img" src="../images/Logo-Pride-month-1.jpg" alt="" />
              </Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul id="menu-main-navigation " className="navbar-nav ml-auto">
                <li itemScope="itemScope" itemType="" id="menu-item-15329" className="has-mega-menu menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-15329 nav-item">
                  <Link to="#" className="dropdown-toggle nav-link" id="menu-item-dropdown-15329">
                    {props.ServiceTitle}
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" >
                    {props.subMenu.map(item=>(
                      <li key={item.id} itemscope="itemscope" itemtype="" className="mega-menu-column menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-18109 nav-item">
                        <Link to="#" className="dropdown-item">Column 1</Link>
	                      <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" >
                          {Object.values(item).map(list=>(
                          <li key={list.id} itemscope="itemscope" itemtype="" id="menu-item-15955" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-15955 nav-item">
                          <Link to ={list.link.href} className="dropdown-item">{list.link.label}</Link>
                            <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" >
                            {/* { list.ServiceSubMenu.map(post=>(
                              <li key={post.id} itemscope="itemscope" itemtype="" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16645 nav-item">
                                <Link to ={post.link.href} className="dropdown-item">{post.link.label}</Link>
                              </li>
                            ))} */}
                            </ul>
                            <span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span>
                          </li>
                          ))}
                        </ul>
                        <span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span>
                      </li>
                    ))}

	                {/* <li itemscope="itemscope" itemtype="" id="menu-item-18110" className="mega-menu-column menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-18110 nav-item"><a href="#" className="dropdown-item">Column 2</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" role="menu">
		<li itemscope="itemscope" itemtype="" id="menu-item-15954" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-15954 nav-item"><a href="https://www.msystechnologies.com/services/network-solution-providers/" className="dropdown-item">Networking</Link>
		<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" role="menu">
			<li itemscope="itemscope" itemtype="" id="menu-item-16902" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16902 nav-item"><a href="https://www.msystechnologies.com/services/networking/software-defined-networking-solutions/" className="dropdown-item">Software-Defined Networking (SDN)</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16905" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16905 nav-item"><a href="https://www.msystechnologies.com/services/networking/network-function-virtualization-services/" className="dropdown-item">Network Function Virtualization Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16903" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16903 nav-item"><a href="https://www.msystechnologies.com/services/networking/sd-wan-service-providers/" className="dropdown-item">Software-Defined Wide Area Network (SD-WAN)</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16904" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16904 nav-item"><a href="https://www.msystechnologies.com/services/networking/network-monitoring-services/" className="dropdown-item">Network Monitoring Services</Link></li>
		</ul>
<span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span></li>
		<li itemscope="itemscope" itemtype="" id="menu-item-15956" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-15956 nav-item"><a href="https://www.msystechnologies.com/services/devops-services/" className="dropdown-item">DevOps</Link>
		<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" role="menu">
			<li itemscope="itemscope" itemtype="" id="menu-item-17975" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17975 nav-item"><a href="https://www.msystechnologies.com/services/devops/devsecops-consulting-services/" className="dropdown-item">DevSecOps Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16896" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16896 nav-item"><a href="https://www.msystechnologies.com/services/devops/docker-consulting-services" className="dropdown-item">Docker Consulting Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16895" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16895 nav-item"><a href="https://www.msystechnologies.com/services/devops/kubernetes-cloud-providers/" className="dropdown-item">Kubernetes Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-18421" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-18421 nav-item"><a href="https://www.msystechnologies.com/services/devops/configuration-management-services" className="dropdown-item">Configuration Management Services (CMS)</Link></li>
		</ul>
<span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span></li>
	</ul>
<span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span></li>
	<li itemscope="itemscope" itemtype="" id="menu-item-18111" className="mega-menu-column menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-18111 nav-item"><a href="#" className="dropdown-item">Column 3</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" role="menu">
		<li itemscope="itemscope" itemtype="" id="menu-item-15953" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-15953 nav-item"><a href="https://www.msystechnologies.com/services/virtualization-services/" className="dropdown-item">Virtualization</Link>
		<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" role="menu">
			<li itemscope="itemscope" itemtype="" id="menu-item-16899" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16899 nav-item"><a href="https://www.msystechnologies.com/services/virtualization/vcenter-plugin-development-services/" className="dropdown-item">Plugin Development Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16901" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16901 nav-item"><a href="https://www.msystechnologies.com/services/virtualization/vmware-citrix-whql-certification/" className="dropdown-item">Certification Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16900" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16900 nav-item"><a href="https://www.msystechnologies.com/services/virtualization/network-virtualization-solutions/" className="dropdown-item">Network Virtualization Solutions</Link></li>
		</ul>
<span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span></li>
		<li itemscope="itemscope" itemtype="" id="menu-item-16052" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16052 nav-item"><a href="https://www.msystechnologies.com/industries/enterprise-automation-solution" className="dropdown-item">Enterprise Automation</Link></li>
		<li itemscope="itemscope" itemtype="" id="menu-item-17763" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17763 nav-item"><a href="https://www.msystechnologies.com/services/site-reliability-engineering-services/" className="dropdown-item">Site Reliability Engineering</Link></li>
		<li itemscope="itemscope" itemtype="" id="menu-item-15950" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15950 nav-item"><a href="https://www.msystechnologies.com/services/qa-automation-services/" className="dropdown-item">QA Automation</Link></li>
		<li itemscope="itemscope" itemtype="" id="menu-item-17976" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17976 nav-item"><a href="https://www.msystechnologies.com/services/technical-support-services/" className="dropdown-item">Technical Support Services</Link></li>
		<li itemscope="itemscope" itemtype="" id="menu-item-15948" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15948 nav-item"><a href="https://www.msystechnologies.com/services/software-product-sustenance-support" className="dropdown-item">Product Sustenance</Link></li>
		<li itemscope="itemscope" itemtype="" id="menu-item-15947" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-15947 nav-item"><a href="https://www.msystechnologies.com/services/it-consulting-and-staffing-services" className="dropdown-item">Contingent Hiring</Link></li>
	</ul>
<span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span></li>
	<li itemscope="itemscope" itemtype="" id="menu-item-18112" className="mega-menu-column menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-18112 nav-item"><a href="#" className="dropdown-item">Column 4</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" role="menu">
		<li itemscope="itemscope" itemtype="" id="menu-item-15952" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-15952 nav-item"><a href="https://www.msystechnologies.com/services/cloud-computing-services/" className="dropdown-item">Cloud Computing</Link>
		<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15329" role="menu">
			<li itemscope="itemscope" itemtype="" id="menu-item-17997" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17997 nav-item"><a href="https://www.msystechnologies.com/services/cloud/cloud-native-services" className="dropdown-item">Cloud Native Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16911" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16911 nav-item"><a href="https://www.msystechnologies.com/services/cloud/multi-cloud-solutions/" className="dropdown-item">Multi-Cloud Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16912" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16912 nav-item"><a href="https://www.msystechnologies.com/services/cloud/openstack-services/" className="dropdown-item">OpenStack Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16913" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16913 nav-item"><a href="https://www.msystechnologies.com/services/cloud/disaster-recovery-solutions/" className="dropdown-item">Data Protection &amp; Back up Recovery</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16910" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16910 nav-item"><a href="https://www.msystechnologies.com/services/cloud/cloud-migration-services/" className="dropdown-item">Cloud Migration Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16914" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16914 nav-item"><a href="https://www.msystechnologies.com/services/cloud/cloud-integrated-storage/" className="dropdown-item">Cloud Integrated Storage</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16909" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16909 nav-item"><a href="https://www.msystechnologies.com/services/cloud/cloud-enablement-services/" className="dropdown-item">Cloud Enablement Services</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16915" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16915 nav-item"><a href="https://www.msystechnologies.com/services/cloud/hybrid-cloud-using-vmware-vcloud-connector/" className="dropdown-item">Hybrid Cloud Services Using VMware vCloud Connector</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16908" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16908 nav-item"><a href="https://www.msystechnologies.com/services/cloud/cloud-infrastructure-services/" className="dropdown-item">Cloud Infrastructure-as-a-Service (IaaS)</Link></li>
			<li itemscope="itemscope" itemtype="" id="menu-item-16907" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-16907 nav-item"><a href="https://www.msystechnologies.com/services/cloud/cloud-governance-and-management/" className="dropdown-item">Cloud Governance Services</Link></li>
		</ul>
    <span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span></li>
  </ul>
<span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span></li> */}
                  </ul>
                  <span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span>
                </li>
                {props.menuItem.map(list=>(
                <li key={list.id} itemScope="itemScope" itemType="" id="menu-item-15780" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown active menu-item-15780 nav-item">
                  <Link to="#" className="dropdown-toggle nav-link" id="menu-item-dropdown-15780">
                    {list.Title}
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-15780">
                    {list.menu_links.data.map(post=>(
                    <li key={post.id} itemScope="itemScope" itemType="" id="menu-item-16050" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-16048 current_page_item active menu-item-16050 nav-item">
                      <Link to={post.attributes.link.href} className="dropdown-item" aria-current="page">
                        {post.attributes.link.label}
                      </Link>
                    </li>
                    ))}
                  </ul>
                  <span className="menuToggleIcon"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path></svg></span>
                </li>
                ))}
                <li itemscope="itemscope" itemtype="" id="menu-item-16209" className="headerContactCTA menu-item menu-item-type-post_type menu-item-object-page menu-item-16209 nav-item">
                  <Link to={props.button.Button.href} className="nav-link">{props.button.Title}</Link>
                </li>
              </ul>
              <ul id="menu-main-navigation-mobile" className="navbar-nav ml-auto"><li itemScope="itemScope" itemType="" id="menu-item-17646" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-17646 nav-item"><Link to="#" className="dropdown-toggle nav-link" id="menu-item-dropdown-17646">Services</Link>
                <ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17646" >
	<li itemScope="itemScope" itemType="" id="menu-item-17647" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-17647 nav-item"><Link to="https://staging.msystechnologies.com/services/storage-consulting-services/" className="dropdown-item">Storage Engineering</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17646" >
		<li itemScope="itemScope" itemType="" id="menu-item-17648" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17648 nav-item"><Link to="https://staging.msystechnologies.com/services/storage/Linkll-flash-array-solutions/" className="dropdown-item">All-Flash Array Solutions</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17649" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17649 nav-item"><Link to="https://staging.msystechnologies.com/services/storage/hyperconverged-solutions/" className="dropdown-item">Hyperconverged Solutions</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17650" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17650 nav-item"><Link to="https://staging.msystechnologies.com/services/storage/software-defined-storage-solution/" className="dropdown-item">Software Defined Storage (SDS)</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17651" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17651 nav-item"><Link to="https://staging.msystechnologies.com/services/storage/san-storage-solutions/" className="dropdown-item">SAN Storage Solutions</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17652" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17652 nav-item"><Link to="https://staging.msystechnologies.com/services/storage/data-protection-services/" className="dropdown-item">Data Protection Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17653" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17653 nav-item"><Link to="https://staging.msystechnologies.com/services/storage/cloud-storage-gateway/" className="dropdown-item">Cloud Storage and Gateway</Link></li>
	</ul>
</li>
	<li itemScope="itemScope" itemType="" id="menu-item-17655" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-17655 nav-item"><Link to="https://staging.msystechnologies.com/services/network-solution-providers/" className="dropdown-item">Networking</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17646" >
		<li itemScope="itemScope" itemType="" id="menu-item-17656" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17656 nav-item"><Link to="https://staging.msystechnologies.com/services/networking/software-defined-networking-solutions/" className="dropdown-item">Software-Defined Networking (SDN)</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17657" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17657 nav-item"><Link to="https://staging.msystechnologies.com/services/networking/network-function-virtualization-services/" className="dropdown-item">Network Function Virtualization Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17658" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17658 nav-item"><Link to="https://staging.msystechnologies.com/services/networking/sd-wan-service-providers/" className="dropdown-item">Software-Defined Wide Area Network (SD-WAN)</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17659" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17659 nav-item"><Link to="https://staging.msystechnologies.com/services/networking/network-monitoring-services/" className="dropdown-item">Network Monitoring Services</Link></li>
	</ul>
</li>
	<li itemScope="itemScope" itemType="" id="menu-item-17660" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-17660 nav-item"><Link to="https://staging.msystechnologies.com/virtualization-services/" className="dropdown-item">Virtualization Services</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17646" >
		<li itemScope="itemScope" itemType="" id="menu-item-17662" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17662 nav-item"><Link to="https://staging.msystechnologies.com/services/virtualization/vcenter-plugin-development-services/" className="dropdown-item">Plugin Development Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17663" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17663 nav-item"><Link to="https://staging.msystechnologies.com/services/virtualization/vmware-citrix-whql-certification/" className="dropdown-item">Certification Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17664" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17664 nav-item"><Link to="https://staging.msystechnologies.com/services/virtualization/network-virtualization-solutions/" className="dropdown-item">Network Virtualization Solutions</Link></li>
	</ul>
</li>
	<li itemScope="itemScope" itemType="" id="menu-item-17665" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-17665 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud-computing-services/" className="dropdown-item">Cloud Computing</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17646" >
		<li itemScope="itemScope" itemType="" id="menu-item-17666" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17666 nav-item"><Link to="#" className="dropdown-item">Cloud Native Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17667" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17667 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/multi-cloud-solutions/" className="dropdown-item">Multi-Cloud Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17668" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17668 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/openstack-services/" className="dropdown-item">OpenStack Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17669" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17669 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/disaster-recovery-solutions/" className="dropdown-item">Data Protection &#038; Back up Recovery</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17670" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17670 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/disaster-recovery-solutions/" className="dropdown-item">Data Protection &#038; Back up Recovery</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17671" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17671 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/cloud-migration-services/" className="dropdown-item">Cloud Migration Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17672" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17672 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/cloud-integrated-storage/" className="dropdown-item">Cloud Integrated Storage</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17673" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17673 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/cloud-enablement-services/" className="dropdown-item">Private Cloud Enablement Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17674" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17674 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/hybrid-cloud-using-vmware-vcloud-connector/" className="dropdown-item">Hybrid Cloud Services Using VMware vCloud Connector</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17675" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17675 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/cloud-infrastructure-services/" className="dropdown-item">Cloud Infrastructure-as-a-Service (IaaS)</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17676" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17676 nav-item"><Link to="https://staging.msystechnologies.com/services/cloud/cloud-governance-and-management/" className="dropdown-item">Cloud Governance Services</Link></li>
	</ul>
</li>
	<li itemScope="itemScope" itemType="" id="menu-item-17677" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-17677 nav-item"><Link to="#" className="dropdown-item">Digital Transformation</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17646" >
		<li itemScope="itemScope" itemType="" id="menu-item-17678" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17678 nav-item"><Link to="https://staging.msystechnologies.com/ui-ux-managed-services/" className="dropdown-item">UI/UX Managed Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17679" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17679 nav-item"><Link to="https://staging.msystechnologies.com/services/digital-services/Linki-machine-learning-consulting/" className="dropdown-item">Artificial Intelligence &#038; Machine Learning Consulting</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17680" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17680 nav-item"><Link to="https://staging.msystechnologies.com/services/digital-services/big-data-analytics-services/" className="dropdown-item">Big Data Analytics Services</Link></li>
	</ul>
</li>
	<li itemScope="itemScope" itemType="" id="menu-item-17681" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-17681 nav-item"><Link to="https://staging.msystechnologies.com/services/devops-services/" className="dropdown-item">DevOps</Link>
	<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17646" >
		<li itemScope="itemScope" itemType="" id="menu-item-17682" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17682 nav-item"><Link to="#" className="dropdown-item">DevSecOps Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17683" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17683 nav-item"><Link to="https://staging.msystechnologies.com/services/devops/docker-consulting-services" className="dropdown-item">Docker Consulting Services</Link></li>
		<li itemScope="itemScope" itemType="" id="menu-item-17684" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17684 nav-item"><Link to="https://staging.msystechnologies.com/services/devops/kubernetes-cloud-providers/" className="dropdown-item">Kubernetes Services</Link></li>
	</ul>
</li>
	<li itemScope="itemScope" itemType="" id="menu-item-17685" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17685 nav-item"><Link to="https://staging.msystechnologies.com/industries/enterprise-automation-solution" className="dropdown-item">Enterprise Automation</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17686" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17686 nav-item"><Link to="#" className="dropdown-item">Site Reliability Engineering</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17687" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17687 nav-item"><Link to="https://staging.msystechnologies.com/services/qa-automation-services/" className="dropdown-item">QA Automation</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17688" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-17688 nav-item"><Link to="#" className="dropdown-item">Technical Support Services</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17689" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17689 nav-item"><Link to="https://staging.msystechnologies.com/services/software-product-sustenance-support" className="dropdown-item">Product Sustenance</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17690" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17690 nav-item"><Link to="https://staging.msystechnologies.com/services/it-consulting-and-staffing-services" className="dropdown-item">Contingent Hiring Services</Link></li>
                </ul>
</li>
<li itemScope="itemScope" itemType="" id="menu-item-17691" className="menu-item menu-item-type-custom menu-item-object-custom current-menu-ancestor current-menu-parent menu-item-has-children dropdown active menu-item-17691 nav-item"><Link to="#" className="dropdown-toggle nav-link" id="menu-item-dropdown-17691">Industries</Link>
<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17691" >
	<li itemScope="itemScope" itemType="" id="menu-item-17692" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17692 nav-item"><Link to="https://staging.msystechnologies.com/industries/independent-software-vendors" className="dropdown-item">Independent Software Vendors (ISVs)</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17693" className="menu-item menu-item-type-post_type menu-item-object-page current-menu-item page_item page-item-16033 current_page_item active menu-item-17693 nav-item"><Link to="https://staging.msystechnologies.com/industries/data-center-services" className="dropdown-item" aria-current="page">Datacenter</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17694" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17694 nav-item"><Link to="https://staging.msystechnologies.com/industries/financial-technology-solutions" className="dropdown-item">Fintech</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17695" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17695 nav-item"><Link to="https://staging.msystechnologies.com/industries/loyalty-management-solution" className="dropdown-item">Loyalty</Link></li>
</ul>
</li>
<li itemScope="itemScope" itemType="" id="menu-item-17696" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-17696 nav-item"><Link to="#" className="dropdown-toggle nav-link" id="menu-item-dropdown-17696">Solutions</Link>
<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17696" >
	<li itemScope="itemScope" itemType="" id="menu-item-17697" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17697 nav-item"><Link to="https://staging.msystechnologies.com/solutions/ux-design-studio" className="dropdown-item">UX Design Studio</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17698" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17698 nav-item"><Link to="https://staging.msystechnologies.com/solutions/solution-accelerators/" className="dropdown-item">Solution Accelerators</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17699" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17699 nav-item"><Link to="https://staging.msystechnologies.com/solutions/lab-as-a-service/" className="dropdown-item">Lab as a Service</Link></li>
</ul>
</li>
<li itemScope="itemScope" itemType="" id="menu-item-17700" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17700 nav-item"><Link to="https://staging.msystechnologies.com/blogs/" className="nav-link">Blogs</Link></li>
<li itemScope="itemScope" itemType="" id="menu-item-17701" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children dropdown menu-item-17701 nav-item"><Link to="https://staging.msystechnologies.com/resources/" className="dropdown-toggle nav-link" id="menu-item-dropdown-17701">Resources</Link>
<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17701" >
	<li itemScope="itemScope" itemType="" id="menu-item-17702" className="menu-item menu-item-type-taxonomy menu-item-object-resource-category menu-item-17702 nav-item"><Link to="https://staging.msystechnologies.com/resources/case-studies/" className="dropdown-item">Case Studies</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17703" className="menu-item menu-item-type-taxonomy menu-item-object-resource-category menu-item-17703 nav-item"><Link to="https://staging.msystechnologies.com/resources/white-papers/" className="dropdown-item">White Papers</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17708" className="menu-item menu-item-type-taxonomy menu-item-object-resource-category menu-item-17708 nav-item"><Link to="https://staging.msystechnologies.com/resources/infographics/" className="dropdown-item">Infographics</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17709" className="menu-item menu-item-type-taxonomy menu-item-object-resource-category menu-item-17709 nav-item"><Link to="https://staging.msystechnologies.com/resources/ebooks/" className="dropdown-item">eBooks</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17707" className="menu-item menu-item-type-taxonomy menu-item-object-resource-category menu-item-17707 nav-item"><Link to="https://staging.msystechnologies.com/resources/Linkrticles/" className="dropdown-item">Articles</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17704" className="menu-item menu-item-type-taxonomy menu-item-object-resource-category menu-item-17704 nav-item"><Link to="https://staging.msystechnologies.com/resources/brochures/" className="dropdown-item">Brochures</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17705" className="menu-item menu-item-type-taxonomy menu-item-object-resource-category menu-item-17705 nav-item"><Link to="https://staging.msystechnologies.com/resources/podcasts/" className="dropdown-item">Podcasts</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17706" className="menu-item menu-item-type-taxonomy menu-item-object-resource-category menu-item-17706 nav-item"><Link to="https://staging.msystechnologies.com/resources/webinars/" className="dropdown-item">Webinars</Link></li>
</ul>
</li>
<li itemScope="itemScope" itemType="" id="menu-item-17710" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown menu-item-17710 nav-item"><Link to="#" className="dropdown-toggle nav-link" id="menu-item-dropdown-17710">Company</Link>
<ul className="dropdown-menu" aria-labelledby="menu-item-dropdown-17710" >
	<li itemScope="itemScope" itemType="" id="menu-item-17711" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17711 nav-item"><Link to="https://staging.msystechnologies.com/company/Linkbout-us/" className="dropdown-item">About MSys</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17712" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17712 nav-item"><Link to="https://staging.msystechnologies.com/company/leadership/" className="dropdown-item">Leadership</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17713" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17713 nav-item"><Link to="https://staging.msystechnologies.com/company/msys-careers/" className="dropdown-item">MSys Careers</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17714" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17714 nav-item"><Link to="https://staging.msystechnologies.com/company/press-releases/" className="dropdown-item">Press Releases</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17715" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17715 nav-item"><Link to="https://staging.msystechnologies.com/company/events/" className="dropdown-item">Events</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17716" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17716 nav-item"><Link to="https://staging.msystechnologies.com/company/clients-and-partners/" className="dropdown-item">Clients &#038; Partners</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17717" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17717 nav-item"><Link to="https://staging.msystechnologies.com/company/Linkwards-and-recognition/" className="dropdown-item">Awards &#038; Recognition</Link></li>
	<li itemScope="itemScope" itemType="" id="menu-item-17718" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17718 nav-item"><Link to="https://staging.msystechnologies.com/company/brand-guidelines/" className="dropdown-item">MSys Brand Guidelines</Link></li>
</ul>
</li>
<li itemScope="itemScope" itemType="" id="menu-item-17719" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-17719 nav-item"><Link to="https://staging.msystechnologies.com/contact-us/" className="nav-link">Contact Us</Link></li>
              </ul>
              <div className="searchBtnHeader">
                <img
                  className="blackSearchIcon"
                  src="https://staging.msystechnologies.com/wp-content/themes/msys/images/magnifying-glassBlack.svg"
                  width="20"
                  alt="blackSearchIcon"
                />
                <img
                  className="whiteSearchIcon"
                  src="https://staging.msystechnologies.com/wp-content/themes/msys/images/magnifying-glassWhite.png"
                  width="20"
                  alt="whiteSearchIcon"
                />
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}
Header.defaultProps = {
  siteTitle: ``,
}

export default Header
