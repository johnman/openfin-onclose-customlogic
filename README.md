# Application/Platform OnClose Logic

      This example shows how you can perform an action when an OpenFin window
      application or platform closes. I have used preload scripts (see the
      config files in the config folder) to load this logic without requiring
      changes to the window application main page or the need for a custom
      platform provider.

      The logic from these files in the preload folder can be added to the
      script of the main window in a window application or a custom provider for
      the platform.

      Another important thing to point out is the runtime arguments section of
      the config files. This config file specifies some args: a security realm
      so that this application is isolated from other applications and the mesh
      argument so that the application can still communicate on the message bus
      with others.

      You can use the <b>Add Settings</b> in the browser or once you have
      launched an OpenFin window application or platform using the links and button on the index.html page.

      In all cases a cookie with a time entry will be added (which should expire
      in a day) and a localstorage entry will be added.

      The difference is when you close the browser or re-open the application.
      The browser will still have both values but the OpenFin applications will
      not. We clear everything but the logic in the preload could be more
      specific and doesn't have to clear data (it could be some other on close
      logic).

The codesandbox can be found here: https://codesandbox.io/s/openfin-onclose-customlogic-9onyq

Or you can go direct to the url if you just want to launch instead of looking at the code: https://9onyq.csb.app/

Some things you will need to update if you want to run your own copy or if you have forked this from codesandbox:

In config/app.platform.fin.json, config/app.window.fin.json update:

- uuid : make the uuid unique
- visit https://www.openfin.co and request a trial/developer license
- update the url field to reflect your codesandbox url
- update the application icon to reflect your own icon
- update the name and description to reflect your application
- update the security realm to something specific to your application

More information about OpenFin:

- https://openfin.co/ -> main site
- https://developers.openfin.co/docs/getting-started => getting started guide
- https://github.com/openfin -> OpenFin Github repo
