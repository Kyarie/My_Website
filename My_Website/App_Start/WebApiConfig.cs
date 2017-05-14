using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace My_Website.App_Start
{
    public class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            //config.Routes.MapHttpRoute(
            //    name: "DefaultApi",
            //    routeTemplate: "api/{controller}/{id}",
            //    defaults: new { id = RouteParameter.Optional }
            //);

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "API/{controller}/{action}/{id}",
                defaults: new { controller = "CollegeDashboardNew", action = "ReturnSomething", id = RouteParameter.Optional }
            );

            // Force WebAPI to return JSON
            var jsonFormatter = new JsonMediaTypeFormatter();
            config.Services.Replace(typeof(IContentNegotiator), new JsonContentNegotiator(jsonFormatter));
            config.Filters.Add(new EDCSValidationtExceptionFilter());
        }
    }
}