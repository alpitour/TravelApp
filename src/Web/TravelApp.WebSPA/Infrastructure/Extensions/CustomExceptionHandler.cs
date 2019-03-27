using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace TravelApp.WebSPA.Infrastructure.Extensions
{
    public static class CustomExceptionHandler
    {
        public static IApplicationBuilder UseCustomExceptionHandler(this IApplicationBuilder app, IHostingEnvironment env)
        {
            app.UseExceptionHandler(appError =>
            {
                appError.Run(async context =>
                {
                    context.Response.StatusCode = (int)HttpStatusCode.InternalServerError;
                    context.Response.ContentType = "application/json";

                    var contextFeature = context.Features.Get<IExceptionHandlerFeature>();
                    if (contextFeature != null)
                    {
                        //logger.LogError($"Something went wrong: {contextFeature.Error}");

                        if (env.IsDevelopment())
                        {
                            var error = new
                            {
                                context.Response.StatusCode,
                                contextFeature.Error.Message,
                                contextFeature.Error.StackTrace,
                            };
                            await context.Response.WriteAsync(JsonConvert.SerializeObject(error));
                        }
                        else
                        {
                            var error = new
                            {
                                context.Response.StatusCode,
                                Message = "Internal Server Error."
                            };
                            await context.Response.WriteAsync(JsonConvert.SerializeObject(error));
                        }
                    }
                });
            });

            return app;
        }
    }
}
