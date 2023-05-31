(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{371:function(e,t,a){"use strict";a.r(t);var s=a(32),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cloudlinux-advantage-for-whmcs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloudlinux-advantage-for-whmcs","aria-hidden":"true"}},[e._v("#")]),e._v(" CloudLinux Advantage for WHMCS")]),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#overview"}},[e._v("Overview")])]),a("li",[a("a",{attrs:{href:"#installation-and-configuration"}},[e._v("Installation and Configuration")]),a("ul",[a("li",[a("a",{attrs:{href:"#installation-and-update"}},[e._v("Installation and Update")])]),a("li",[a("a",{attrs:{href:"#setting-prices-for-configurable-options"}},[e._v('Setting prices for "Configurable options"')])]),a("li",[a("a",{attrs:{href:"#product-service-setup"}},[e._v("Product/Service setup")])]),a("li",[a("a",{attrs:{href:"#cloudlinuxadvantage-addon-page"}},[e._v("CloudLinuxAdvantage addon page")])]),a("li",[a("a",{attrs:{href:"#faq"}},[e._v("FAQ")])])])]),a("li",[a("a",{attrs:{href:"#plesk-extension"}},[e._v("Plesk extension")]),a("ul",[a("li",[a("a",{attrs:{href:"#installation"}},[e._v("Installation")])]),a("li",[a("a",{attrs:{href:"#deinstallation"}},[e._v("Deinstallation")])])])]),a("li",[a("a",{attrs:{href:"#end-user-workflow"}},[e._v("End user workflow")]),a("ul",[a("li",[a("a",{attrs:{href:"#how-to-update-an-existing-order-service"}},[e._v("How to update an existing order (service)")])]),a("li",[a("a",{attrs:{href:"#how-to-checkout-new-order"}},[e._v("How to checkout new order")])])])]),a("li",[a("a",{attrs:{href:"#changelog"}},[e._v("Changelog")])]),a("li",[a("a",{attrs:{href:"#requirements"}},[e._v("Requirements")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),a("p",[e._v('CloudLinux Advantage for WHMCS automatically configures "Configurable options" that can be linked to the Product/Service.')]),e._v(" "),a("p",[e._v("When a client orders/upgrade a configurable option, a request will be sent to the server to change the CloudLinux features status.")]),e._v(" "),a("h2",{attrs:{id:"installation-and-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-configuration","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation and Configuration")]),e._v(" "),a("h3",{attrs:{id:"installation-and-update"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation-and-update","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation and Update")]),e._v(" "),a("ol",[a("li",[e._v("Your WHMCS must be properly configured to work with cron because sending requests to the server is sent by cron. "),a("a",{attrs:{href:"https://docs.whmcs.com/Crons#Setting_up_the_Cron_Tasks",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to setting up the cron"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Plesk requires the installation of an additional "),a("a",{attrs:{href:"#plesk-extension"}},[e._v("extension")]),e._v(".")]),e._v(" "),a("li",[e._v("Download archive "),a("a",{attrs:{href:"https://repo.cloudlinux.com/plugins/whmcs-cl-advantage-plugin-latest.zip",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://repo.cloudlinux.com/plugins/whmcs-cl-advantage-plugin-latest.zip"),a("OutboundLink")],1)])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget -q https://repo.cloudlinux.com/plugins/whmcs-cl-advantage-plugin-latest.zip\n")])])])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Unzip the archive to "),a("span",{staticClass:"notranslate"},[a("code",[e._v("<whmcs_root>/modules/addons")])]),e._v(" folder")])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("unzip whmcs-cl-advantage-plugin-latest.zip -d <whmcs_root>/modules/addons\n")])])])]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("If your hosting requires specific files permissions, change them accordingly in the folder: "),a("span",{staticClass:"notranslate"},[a("code",[e._v("<whmcs_root>/modules/addons/cloudlinux_advantage")])])]),e._v(" "),a("li",[e._v('Go to the admin panel page "WHMCS/System Settings/Addon Modules", activate "CloudLinuxAdvantage"\n'),a("img",{attrs:{src:"/images/whmcs-advantage-admin-addon-activate.png",alt:""}})]),e._v(" "),a("li",[e._v("Configure addon:\n"),a("ol",[a("li",[e._v('Enable debug mode if necessary. Logs are stored in the "System Module Debug Log"')]),e._v(" "),a("li",[e._v("Allow administrator access to the addon page to view information about the status of the servers\n"),a("img",{attrs:{src:"/images/whmcs-advantage-admin-addon-configure.png",alt:""}})])])])]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Notes")]),a("p",[e._v('When upgrading to a new version, be sure to open the "WHMCS/System Settings/Addon Modules" page to apply the module changes.')])]),a("h3",{attrs:{id:"setting-prices-for-configurable-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-prices-for-configurable-options","aria-hidden":"true"}},[e._v("#")]),e._v(' Setting prices for "Configurable options"')]),e._v(" "),a("p",[e._v('During addon activation, "Configurable options" AccelerateWP are created automatically (System settings/Configurable Option/Group name "AccelerateWP")')]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Notes")]),a("p",[e._v("Don't change the name of the group, options and sub-options!")])]),a("p",[a("img",{attrs:{src:"/images/whmcs-advantage-admin-config-option.png",alt:""}})]),e._v(" "),a("p",[e._v("In the AccelerateWP group settings, you need to configure:")]),e._v(" "),a("ul",[a("li",[e._v("Choose for which products (cPanel/Plesk) you can additionally order the service.")]),e._v(" "),a("li",[e._v('For the "accelerate_wp_premium|AccelerateWP Premium" option, set the cost.\n'),a("ul",[a("li",[e._v("In the option price settings, there are two options, On and Off. Adjust prices as you see fit.")])])]),e._v(" "),a("li",[e._v('For the "accelerate_wp_cdn|AccelerateWP CDN" option, set the cost.\n'),a("ul",[a("li",[e._v('In the option price settings, there are options: Off, 50 GB, 100 GB etc. Adjust prices as you see fit. You can hide unwanted tariffs using the "Hide" checkbox.')])])])]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/whmcs-advantage-admin-config-option-price.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"product-service-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-service-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Product/Service setup")]),e._v(" "),a("p",[e._v('Set up your service to work with "Configurable options" in the "System settings/Products/Services".')]),e._v(" "),a("ol",[a("li",[e._v("Choose the payment type, One time or Recurrent.\n"),a("img",{attrs:{src:"/images/whmcs-advantage-admin-product-price.png",alt:""}})]),e._v(" "),a("li",[e._v('Make sure the product is associated with the Configurable option "AccelerateWP"\n'),a("img",{attrs:{src:"/images/whmcs-advantage-admin-product-config-option.png",alt:""}})]),e._v(" "),a("li",[e._v("Allow clients to upgrade Configurable options so they can purchase AccelerateWP for existing subscriptions.\n"),a("img",{attrs:{src:"/images/whmcs-advantage-admin-product-upgrades.png",alt:""}})]),e._v(" "),a("li",[e._v("Save changes.")]),e._v(" "),a("li",[e._v('Existing customers can upgrade their AccelerateWP Premium settings by changing the order using the "Upgrade/Downgrade options" button.\n'),a("img",{attrs:{src:"/images/whmcs-advantage-admin-ui-upgrade-config-option.png",alt:""}})]),e._v(" "),a("li",[e._v("New customers will be able to select AccelerateWP settings during order creation\n"),a("img",{attrs:{src:"/images/whmcs-advantage-admin-ui-new-config-option.png",alt:""}})]),e._v(" "),a("li",[e._v("The administrator can manually change the setting of AccelerateWP by editing the purchased service by the customer\n"),a("img",{attrs:{src:"/images/whmcs-advantage-admin-service-change-config-option.png",alt:""}})])]),e._v(" "),a("h3",{attrs:{id:"cloudlinuxadvantage-addon-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cloudlinuxadvantage-addon-page","aria-hidden":"true"}},[e._v("#")]),e._v(" CloudLinuxAdvantage addon page")]),e._v(" "),a("p",[e._v("Module page contains information about the state of active features")]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/whmcs-advantage-admin-addon-menu.png",alt:""}})]),e._v(" "),a("p",[e._v('In case the configurable options "AccelerateWP" were accidentally removed, you can re-install them on the CloudLinuxAdvantage settings page.')]),e._v(" "),a("p",[a("img",{attrs:{src:"/images/whmcs-advantage-admin-addon-page.png",alt:""}})]),e._v(" "),a("p",[e._v("The table shows the queue and history of requests to the servers for which the AccelerateWP status change will be applied.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("Deactivating the addon will delete the table with the history of AccelerateWP activity on the servers.")])]),a("table",[a("thead",[a("tr",[a("th",[e._v("Column")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("Service")]),e._v(" "),a("td",[e._v("What customer service does the zarpos refer to.")])]),e._v(" "),a("tr",[a("td",[e._v("Suite")]),e._v(" "),a("td",[e._v("For which product the status will be changed."),a("br"),e._v("* Last status: previous status"),a("br"),e._v(" * Current status: current service status"),a("br"),e._v('* Will set status: What status will be set. Depending on the selected configurable option "AccelerateWP" and the status of the users\'s service, the status may differ.')])]),e._v(" "),a("tr",[a("td",[e._v("Message")]),e._v(" "),a("td",[e._v("The last message about the operation. A detailed error may be displayed.")])]),e._v(" "),a("tr",[a("td",[e._v("Queue")]),e._v(" "),a("td",[e._v("Availability of a queue for executing a cron request")])]),e._v(" "),a("tr",[a("td",[e._v("Action")]),e._v(" "),a("td",[e._v("Send request manually")])])])]),e._v(" "),a("p",[e._v("An example of a request that will be executed by cron\n"),a("img",{attrs:{src:"/images/whmcs-advantage-admin-addon-page-example-cron.png",alt:""}})]),e._v(" "),a("p",[e._v("An example of a request that failed\n"),a("img",{attrs:{src:"/images/whmcs-advantage-admin-addon-page-example-error.png",alt:""}})]),e._v(" "),a("h3",{attrs:{id:"faq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#faq","aria-hidden":"true"}},[e._v("#")]),e._v(" FAQ")]),e._v(" "),a("h4",{attrs:{id:"how-whmcs-communicates-with-end-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-whmcs-communicates-with-end-server","aria-hidden":"true"}},[e._v("#")]),e._v(" How WHMCS communicates with end-server")]),e._v(" "),a("p",[e._v("The addon tracks the change in the order and services of the client."),a("br"),e._v('\nFor those client services that have the configurable options "AccelerateWP", a request is sent to the server to change the status of AccelerateWP products.')]),e._v(" "),a("p",[e._v("Requests are sent by cron once at the beginning of every minute. If the request fails, there will be a retry after 3 seconds.")]),e._v(" "),a("p",[e._v("Information about the servers to which requests were sent can be viewed on the addon page.")]),e._v(" "),a("p",[e._v("If an error occurs, you will be able to retry the request on the addon page.")]),e._v(" "),a("p",[e._v('The CloudLinuxAdvantage enters the "Allowed" status when the client service\'s status is set to "Active" and the configurable options "On" is selected. In other cases, the status will be set to "Default" and the feature will be turned off for user.')]),e._v(" "),a("h4",{attrs:{id:"how-to-automatically-open-the-upgrade-downgrade-options-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-automatically-open-the-upgrade-downgrade-options-page","aria-hidden":"true"}},[e._v("#")]),e._v(' How to automatically open the "Upgrade/Downgrade Options" page?')]),e._v(" "),a("p",[e._v("Parameters can be used to determine the billing account of the user in order to display proper page.\nWHMCS plugin already has automatic redirect to upgrade page, there is only needed to set upgrade-url\nto the root of your WHMCS instance.")]),e._v(" "),a("h4",{attrs:{id:"update-acceleratewp-0-0-1-module-to-cloudlinuxadvantage-0-0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-acceleratewp-0-0-1-module-to-cloudlinuxadvantage-0-0-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Update AccelerateWP 0.0.1 module to CloudLinuxAdvantage 0.0.2")]),e._v(" "),a("p",[e._v("If you previously had version 0.0.1 of the module installed, you need to perform the following procedure:")]),e._v(" "),a("ul",[a("li",[e._v("Follow the process for installing the module version 0.0.2")]),e._v(" "),a("li",[e._v("The module will automatically update the database")]),e._v(" "),a("li",[e._v("After that, you can deactivate and remove the old module AccelerateWP 0.0.1 ("),a("code",[e._v("<whmcs_root>/modules/addons/acceleratewp")]),e._v(")")]),e._v(" "),a("li",[e._v("If you are using the "),a("a",{attrs:{href:"#plesk-extension"}},[e._v("extension")]),e._v(', you need to update it to the latest version from the "accelerate-wp-1.5-1" package')])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("https://your.whmcs.com/?m=cloudlinux_advantage&action=provisioning&username=democom&domain=demo.com&server_ip=10.51.0.10\n")])])]),a("table",[a("thead",[a("tr",[a("th",[e._v("Parameter")]),e._v(" "),a("th",[e._v("Value")]),e._v(" "),a("th",[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("m")]),e._v(" "),a("td",[e._v("cloudlinux_advantage")]),e._v(" "),a("td",[e._v("Constant.")])]),e._v(" "),a("tr",[a("td",[e._v("action")]),e._v(" "),a("td",[e._v("provisioning")]),e._v(" "),a("td",[e._v("Constant.")])]),e._v(" "),a("tr",[a("td",[e._v("username")]),e._v(" "),a("td",[e._v("democom")]),e._v(" "),a("td",[e._v("Customer's account name.")])]),e._v(" "),a("tr",[a("td",[e._v("domain")]),e._v(" "),a("td",[e._v("demo.com")]),e._v(" "),a("td",[e._v("Customer's account primary domain.")])]),e._v(" "),a("tr",[a("td",[e._v("server_ip")]),e._v(" "),a("td",[e._v("10.51.0.10")]),e._v(" "),a("td",[e._v("Primary IP of the server where AccelerateWP is installed.")])]),e._v(" "),a("tr",[a("td",[e._v("suite")]),e._v(" "),a("td",[e._v("accelerate_wp_premium")]),e._v(" "),a("td",[e._v("Optional. To display the settings of the specified suite only. Options: accelerate_wp_premium or accelerate_wp_cdn_pro.")])])])]),e._v(" "),a("h2",{attrs:{id:"plesk-extension"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plesk-extension","aria-hidden":"true"}},[e._v("#")]),e._v(" Plesk extension")]),e._v(" "),a("p",[e._v("The extension adds the ability to execute the "),a("span",{staticClass:"notranslate"},[a("code",[e._v("accelerate-wp-admin set-suite")])]),e._v(" command to the Plesk XML API.")]),e._v(" "),a("p",[e._v("Do not install it if you are not using AccelerateWP WHMCS billing integration.")]),e._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("Note")]),a("p",[e._v("Requires Plesk version 17.0 or higher"),a("br"),e._v("\nThe Plesk extension is available since accelerate-wp-1.3-2 version")])]),a("h3",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),a("ol",[a("li",[e._v("Install")])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/usr/sbin/plesk bin extension -i /usr/share/cloudlinux/plesk-accelerate-wp-latest.zip\n")])])])]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Activate")])]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/usr/sbin/plesk bin extension --enable accelerate-wp\n")])])])]),e._v(" "),a("h3",{attrs:{id:"deinstallation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deinstallation","aria-hidden":"true"}},[e._v("#")]),e._v(" Deinstallation")]),e._v(" "),a("div",{staticClass:"notranslate"},[a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/usr/sbin/plesk bin extension -u accelerate-wp\n")])])])]),e._v(" "),a("h2",{attrs:{id:"end-user-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#end-user-workflow","aria-hidden":"true"}},[e._v("#")]),e._v(" End user workflow")]),e._v(" "),a("h3",{attrs:{id:"how-to-update-an-existing-order-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-update-an-existing-order-service","aria-hidden":"true"}},[e._v("#")]),e._v(" How to update an existing order (service)")]),e._v(" "),a("ol",[a("li",[e._v('Open the services page through the menu "Services - My services"')]),e._v(" "),a("li",[e._v("Choose the service you need\n"),a("img",{attrs:{src:"/images/whmcs-advantage-user-services.png",alt:""}})]),e._v(" "),a("li",[e._v('Select the action "Upgrade/Downgrade Options"\n'),a("img",{attrs:{src:"/images/whmcs-advantage-user-services-config-option-upgrade.png",alt:""}})]),e._v(" "),a("li",[e._v("Choose a new configuration and place an order\n"),a("img",{attrs:{src:"/images/whmcs-advantage-user-services-config-option-change.png",alt:""}})]),e._v(" "),a("li",[e._v("Changes will occur automatically after 1 minute or after confirmation of the order by the service provider")])]),e._v(" "),a("h3",{attrs:{id:"how-to-checkout-new-order"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-checkout-new-order","aria-hidden":"true"}},[e._v("#")]),e._v(" How to checkout new order")]),e._v(" "),a("ol",[a("li",[e._v("Select a service in the service provider's WHMCS portal")]),e._v(" "),a("li",[e._v("A service with AccelerateWP enabled will display options to enable them\n"),a("img",{attrs:{src:"/images/whmcs-advantage-user-order.png",alt:""}})]),e._v(" "),a("li",[e._v("Changes will occur automatically after 1 minute or after confirmation of the order by the service provider")]),e._v(" "),a("li",[e._v("After purchase, you need to manually activate the modules in the AccelerateWP panel")])]),e._v(" "),a("h2",{attrs:{id:"changelog"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog","aria-hidden":"true"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("0.0.2")]),e._v(" "),a("ul",[a("li",[e._v("Module renamed from Accelerate WP to CloudLinux Advantage")]),e._v(" "),a("li",[e._v("Added the ability to purchase AccelerateWP CDN")]),e._v(" "),a("li",[e._v("Improved display of service and server names on the AccelerateWP module page")]),e._v(" "),a("li",[e._v("Added the ability to hide suites on the update options page")]),e._v(" "),a("li",[e._v('Changed "m" parameter in provisioning link (upgrade url) from accelerate_wp to cloudlinux_advantage')])])]),e._v(" "),a("li",[a("p",[e._v("0.0.1")]),e._v(" "),a("ul",[a("li",[e._v("Beta release")])])])]),e._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[e._v("#")]),e._v(" Requirements")]),e._v(" "),a("ul",[a("li",[a("p",[e._v("0.0.2")]),e._v(" "),a("ul",[a("li",[e._v("WHMCS ^8.0")]),e._v(" "),a("li",[e._v("accelerate-wp-1.5-1")])])]),e._v(" "),a("li",[a("p",[e._v("0.0.1")]),e._v(" "),a("ul",[a("li",[e._v("WHMCS ^8.0")]),e._v(" "),a("li",[e._v("accelerate-wp-1.3-2")])])])])])},[],!1,null,null,null);t.default=r.exports}}]);